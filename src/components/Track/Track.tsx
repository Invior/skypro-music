"use client";
import { TrackType } from "@/types/tracks";
import styles from "./track.module.css";
import { useCurrentTrack } from "@/contexts/CurrentProvider";
import { timeFormat } from "../../utils/helpers";
import { useEffect } from "react";
import classNames from "classnames";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { setCurrentTrack } from "@/store/features/tracksSlice";
import useLikeTrack from "@/hooks/useLikeTrack";

type TrackProps = {
  track: TrackType;
};

export function Track({ track }: TrackProps) {
  const { audioRef } = useCurrentTrack();
  const { name, author, album, duration_in_seconds} = track;
  const { currentTrack, isPlaying } = useAppSelector((state) => state.tracks);
  const dispatch = useAppDispatch();
  const {isLiked, handleLike} = useLikeTrack(track);

  const handleTrackClick = () => {
    dispatch(setCurrentTrack(track));
  };

  useEffect(() => {
    audioRef.current?.play();
  }, [audioRef, currentTrack]);

  const time = timeFormat(duration_in_seconds);

  return (
    <div onClick={handleTrackClick} className={styles.playlistItem}>
      <div className={styles.playlistTrack}>
        <div className={styles.trackTitle}>
          <div className={styles.trackTitleImage}>
            {currentTrack?._id === track._id ? (
              <svg
                className={
                  isPlaying
                    ? classNames(styles.trackTitleSvg, styles.playingDot)
                    : styles.trackTitleSvg
                }
              >
                <use xlinkHref="/img/icon/sprite.svg#icon-dot" />
              </svg>
            ) : (
              <svg className={styles.trackTitleSvg}>
                <use xlinkHref="/img/icon/sprite.svg#icon-note" />
              </svg>
            )}
          </div>
          <div>
            <span className={styles.trackTitleLink}>
              {name} <span className={styles.trackTitleSpan} />
            </span>
          </div>
        </div>
        <div className={styles.trackAuthor}>
          <span className={styles.trackAuthorLink}>{author}</span>
        </div>
        <div className={styles.trackAlbum}>
          <span className={styles.trackAlbumLink}>{album}</span>
        </div>
        <div className={styles.trackTimeBlock} onClick={handleLike}>
          <svg className={styles.trackTimeSvg}>
            <use xlinkHref={isLiked ? "/img/icon/sprite.svg#icon-active-like" : "/img/icon/sprite.svg#icon-like"} />
          </svg>
          <span className={styles.trackTimeText}>{time}</span>
        </div>
      </div>
    </div>
  );
}
