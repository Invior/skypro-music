'use client';
import { TrackType } from "@/types/tracks";
import styles from "./Track.module.css";
import { formatTime } from "../../types/time";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setCurrentTrack, setIsPlaying } from "@/store/features/playlistSlice";
import classNames from "classnames";

type TrackProps = {
    track: TrackType,
    tracks: TrackType[]
}

const Track = ({ track, tracks }: TrackProps) => {
    const { name, author, album, duration_in_seconds, id } = track;
    const dispatch = useAppDispatch();
    const isPlaying = useAppSelector((state) => state.playlist.isPlaying);
    const currentTrack = useAppSelector((state) => state.playlist.currentTrack);
    const isCurrentTrack = currentTrack ? currentTrack.id === id : false;

    const handleTrackClick = () => {
        dispatch(setCurrentTrack({ track, tracks }));
        dispatch(setIsPlaying(true));
    };
    return (
        <div onClick={handleTrackClick} className={styles.playlistItem}>
            <div className={styles.playlistTrack}>
                <div className={styles.trackTitle}>
                    <div className={styles.trackTitleImage}>
                        <svg className={classNames(styles.trackTitleSvg, {
                            [styles.playingDot]: isPlaying && isCurrentTrack,
                        })}>
                            <use xlinkHref={`img/icon/sprite.svg#${isCurrentTrack ? "icon-isplaying" : "icon-note"
                                }`} />
                        </svg>
                    </div>
                    <div className={styles.trackTitleText}>
                        <span className={styles.trackTitleLink}>
                            {name} <span className={styles.trackTitleSpan} />
                        </span>
                    </div>
                </div>
                <div className={styles.trackAuthor}>
                    <span className={styles.trackAuthorLink}>
                        {author}
                    </span>
                </div>
                <div className={styles.trackAlbum}>
                    <span className={styles.trackAlbumLink} >
                        {album}
                    </span>
                </div>
                <div className={styles.trackTime}>
                    <svg className={styles.trackTimeSvg}>
                        <use xlinkHref="/img/icon/sprite.svg#icon-like" />
                    </svg>
                    <span className={styles.trackTimeText}>{formatTime(duration_in_seconds)}</span>
                </div>
            </div>
        </div>
    )
}

export default Track;