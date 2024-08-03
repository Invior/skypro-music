'use client';
import { useCurrentTrack } from "@/contexts/CurrentTrackProvider";
import styles from "./Bar.module.css";
import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import ProgressBar from "./ProgressBar/ProgressBar";

const Bar = () => {
    const { currentTrack } = useCurrentTrack();
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [currentTime, setCurrentTime] = useState<number>(0);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [isLoop, setIsLoop] = useState<boolean>(false);

    const togglePlay = () => {
        if (audioRef.current) {
            setIsPlaying(!isPlaying);
        }
    };

    useEffect(() => {
        if (isPlaying) {
            audioRef.current?.pause();
        } else {
            audioRef.current?.play();
        }
    }, [isPlaying]);

    const toggleLoop = () => {
        if (audioRef.current) {
            audioRef.current.loop = !isLoop;
            setIsLoop((prev) => !prev);
        }
    };

    const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (audioRef.current) {
            audioRef.current.volume = Number(event.target.value);
        }
    };

    const handleSeek = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (audioRef.current) {
            audioRef.current.currentTime = Number(event.target.value);
        }
    };

    if (!currentTrack) {
        return null;
    }
    const { name, author, track_file } = currentTrack;
    const duration = audioRef.current?.duration || 0;

    function formatSeconds(seconds: number): string {
        const flooredSeconds = Math.floor(seconds);
        const minutes = Math.floor(flooredSeconds / 60);
        const remainingSeconds = flooredSeconds % 60;
        const formattedSeconds = remainingSeconds.toString().padStart(2, '0');
        return `${minutes}:${formattedSeconds}`;
    }

    return (
        <div className={styles.bar}>
            <div className={styles.bar__currentTime}>
                {formatSeconds(currentTime)} / {formatSeconds(duration)}
            </div>
            <div className={styles.barContent}>
                <audio
                    autoPlay
                    src={track_file}
                    ref={audioRef}
                    onTimeUpdate={(e) => {
                        setCurrentTime(e.currentTarget.currentTime);
                    }}
                />
                <ProgressBar max={duration} value={currentTime} step={0.01} onChange={handleSeek} />
                <div className={styles.barPlayerBlock}>
                    <div className={styles.barPlayer}>
                        <div className={styles.playerControls}>
                            <div onClick={() => alert("Еще не реализовано!")} className={styles.playerBtnPrev}>
                                <svg className={styles.playerBtnPrevSvg}>
                                    <use xlinkHref="/img/icon/sprite.svg#icon-prev" />
                                </svg>
                            </div>
                            <div onClick={togglePlay} className={classNames(styles.playerBtnPlay, styles.btn)}>
                                <svg className={styles.playerBtnPlaySvg}>
                                    {isPlaying ? <use href="/img/icon/sprite.svg#icon-play" /> : <use href="/img/icon/sprite.svg#icon-pause" />}
                                </svg>
                            </div>
                            <div onClick={() => alert("Еще не реализовано!")} className={styles.playerBtnNext}>
                                <svg className={styles.playerBtnNextSvg}>
                                    <use xlinkHref="/img/icon/sprite.svg#icon-next" />
                                </svg>
                            </div>
                            <div onClick={toggleLoop} className={classNames(styles.playerBtnRepeat, styles.btnIcon)}>
                                <svg className={classNames(styles.playerBtnRepeatSvg, isLoop ? styles.playerBtnRepeatSvgActive : null)}>
                                    <use xlinkHref="/img/icon/sprite.svg#icon-repeat" />
                                </svg>
                            </div>
                            <div onClick={() => alert("Еще не реализовано!")} className={classNames(styles.playerBtnShuffle, styles.btnIcon)}>
                                <svg className={styles.playerBtnShuffleSvg}>
                                    <use xlinkHref="/img/icon/sprite.svg#icon-shuffle" />
                                </svg>
                            </div>
                        </div>
                        <div className={styles.playerTrackPlay}>
                            <div className={styles.trackPlayContain}>
                                <div className={styles.trackPlayImage}>
                                    <svg className={styles.trackPlaySvg}>
                                        <use xlinkHref="/img/icon/sprite.svg#icon-note" />
                                    </svg>
                                </div>
                                <div className={styles.trackPlayAuthor}>
                                    <a className={styles.trackPlayAuthorLink} href="http://">
                                        {name}
                                    </a>
                                </div>
                                <div className={styles.trackPlayAlbum}>
                                    <a className={styles.trackPlayAlbumLink} href="http://">
                                        {author}
                                    </a>
                                </div>
                            </div>
                            <div className={styles.trackPlayLikeDis}>
                                <div onClick={() => alert("Еще не реализовано!")} className={classNames(styles.trackPlayLike, styles.btnIcon)}>
                                    <svg className={styles.trackPlayLikeSvg}>
                                        <use xlinkHref="/img/icon/sprite.svg#icon-like" />
                                    </svg>
                                </div>
                                <div onClick={() => alert("Еще не реализовано!")} className={classNames(styles.trackPlayDislike, styles.btnIcon)}>
                                    <svg className={styles.trackPlayDislikeSvg}>
                                        <use xlinkHref="/img/icon/sprite.svg#icon-dislike" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.barVolumeBlock}>
                        <div className={styles.volumeContent}>
                            <div className={styles.volumeImage}>
                                <svg className={styles.volumeSvg}>
                                    <use xlinkHref="/img/icon/sprite.svg#icon-volume" />
                                </svg>
                            </div>
                            <div className={classNames(styles.volumeProgress, styles.btn)}>
                                <input
                                    className={classNames(styles.volumeProgressLine, styles.btn)}
                                    type="range"
                                    name="range"
                                    min="0"
                                    max="1"
                                    step="0.01"
                                    value={audioRef.current?.volume || 0}
                                    onChange={handleVolumeChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bar;