import styles from "./Playlist.module.css";
import classNames from "classnames";
import Track from "../Track/Track";
import { TrackType } from "@/types/tracks";

type PlaylistProps = {
  tracks: TrackType[]
}

const Playlist = ({tracks}: PlaylistProps) => {
  return (
    <div className={styles.centerblockContent}>
      <div className={styles.contentTitle}>
        <div className={classNames(styles.playlistTitleCol, styles.col01)}>Трек</div>
        <div className={classNames(styles.playlistTitleCol, styles.col02)}>Исполнитель</div>
        <div className={classNames(styles.playlistTitleCol, styles.col03)}>Альбом</div>
        <div className={classNames(styles.playlistTitleCol, styles.col04)}>
          <svg className={styles.playlistTitleSvg}>
            <use xlinkHref="/img/icon/sprite.svg#icon-watch" />
          </svg>
        </div>
      </div>
      <div className={styles.contentPlaylist}>
        {tracks.map((track) => <Track key={track.id} track={track} />)}
      </div>
    </div>
  );
};

export default Playlist;