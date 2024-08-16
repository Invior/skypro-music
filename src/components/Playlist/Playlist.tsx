"use client";
import { Track } from "../Track/Track";
import styles from "./playlist.module.css";
import classNames from "classnames";
import { useAppSelector } from "@/store/store";

export function Playlist() {
  const tracks = useAppSelector((state) => state.tracks.filteredPlaylist);
  const isLoading = useAppSelector((state) => state.tracks.isLoading);
  return (
    <div className={styles.centerblockContent}>
      <div className={styles.contentTitle}>
        <div className={classNames(styles.playlistTitleCol, styles.col01)}>
          Трек
        </div>
        <div className={classNames(styles.playlistTitleCol, styles.col02)}>
          Исполнитель
        </div>
        <div className={classNames(styles.playlistTitleCol, styles.col03)}>
          Альбом
        </div>
        <div className={classNames(styles.playlistTitleCol, styles.col04)}>
          <svg className={styles.playlistTitleSvg}>
            <use xlinkHref="/img/icon/sprite.svg#icon-watch" />
          </svg>
        </div>
      </div>
      <div className={styles.contentPlaylist}>
        {tracks.map((track) => (
          <Track key={track._id} track={track} />
        ))}
        {isLoading ? "Загрузка..." : tracks.length === 0 ? "Треки не найдены" : null}
      </div>
    </div>
  );
}
