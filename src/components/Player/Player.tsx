import { useAppDispatch, useAppSelector } from "@/store/store";
import styles from "./player.module.css";
import classNames from "classnames";
import { setNext, setPrev, setShuffle } from "@/store/features/tracksSlice";
import React from "react";

type PlayerProps = {
  isPlaying: boolean;
  isLoop: boolean;
  handlePlay: () => void;
  handleLoop: () => void;
};

export const Player = React.memo(({
  isPlaying,
  isLoop,
  handlePlay,
  handleLoop,
}: PlayerProps) => {
  const { isShuffle } = useAppSelector((state) => state.tracks);

  const dispatch = useAppDispatch();

  const handlePrevTrack = () => {
    dispatch(setPrev());
  };

  const handleNextTrack = () => {
    dispatch(setNext());
  };

  const handleShuffleTracks = () => {
    dispatch(setShuffle(!isShuffle));
  };

  return (
    <div className={styles.playerControls}>
      <div onClick={handlePrevTrack} className={styles.playerBtnPrev}>
        <svg className={styles.playerBtnPrevSvg}>
          <use xlinkHref="/img/icon/sprite.svg#icon-prev" />
        </svg>
      </div>
      <div
        onClick={handlePlay}
        className={classNames(styles.playerBtnPlay, styles.btn)}
      >
        {isPlaying ? (
          <svg className={styles.playerBtnPlaySvg}>
            <use xlinkHref="/img/icon/sprite.svg#icon-pause" />
          </svg>
        ) : (
          <svg className={styles.playerBtnPlaySvg}>
            <use xlinkHref="/img/icon/sprite.svg#icon-play" />
          </svg>
        )}
      </div>
      <div onClick={handleNextTrack} className={styles.playerBtnNext}>
        <svg className={styles.playerBtnNextSvg}>
          <use xlinkHref="/img/icon/sprite.svg#icon-next" />
        </svg>
      </div>
      <div
        onClick={handleLoop}
        className={classNames(styles.playerBtnRepeat, styles.btnIcon)}
      >
        <svg
          className={
            isLoop
              ? classNames(styles.playerBtnRepeatSvgActive, styles.btnIcon)
              : styles.playerBtnRepeatSvg
          }
        >
          <use xlinkHref="/img/icon/sprite.svg#icon-repeat" />
        </svg>
      </div>
      <div
        onClick={handleShuffleTracks}
        className={classNames(styles.playerBtnShuffle, styles.btnIcon)}
      >
        <svg
          className={
            isShuffle
              ? styles.playerBtnShuffleSvgActive
              : styles.playerBtnShuffleSvg
          }
        >
          <use xlinkHref="/img/icon/sprite.svg#icon-shuffle" />
        </svg>
      </div>
    </div>
  );
});

Player.displayName = 'Player';
