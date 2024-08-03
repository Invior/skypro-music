'use client';
import { TrackType } from "@/types/tracks";
import styles from "./Track.module.css";
import { formatTime } from "../../types/time";
import { useCurrentTrack } from "@/contexts/CurrentTrackProvider";

type TrackProps = {
    track: TrackType
}

const Track = ({ track }: TrackProps) => {
    const { setCurrentTrack } = useCurrentTrack();
    const { name, author, album, duration_in_seconds } = track;

    const handleTrackClick = () => {
        setCurrentTrack(track);
    }
    return (
        <div onClick={handleTrackClick} className={styles.playlistItem}>
            <div className={styles.playlistTrack}>
                <div className={styles.trackTitle}>
                    <div className={styles.trackTitleImage}>
                        <svg className={styles.trackTitleSvg}>
                            <use xlinkHref="/img/icon/sprite.svg#icon-note" />
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