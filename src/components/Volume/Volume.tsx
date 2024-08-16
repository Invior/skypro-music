import { useEffect, useState } from "react";
import styles from "./volume.module.css";
import classNames from "classnames";

type VolumeProps = {
  audio: HTMLAudioElement | null,
}

export function Volume({audio}: VolumeProps) {
  const [volume, setVolume] = useState<number>(0.5);

  useEffect(() => {
    if (audio) {
        audio.volume = volume;
    }
}, [volume, audio]);

  return (
    <div className={styles.barVolumeBlock}>
      <div className={styles.volumeContent}>
        <div className={styles.volumeImage}>
          <svg className={styles.volumeSvg}>
            <use xlinkHref="/img/icon/sprite.svg#icon" />
          </svg>
        </div>
        <div className={classNames(styles.volumeProgress, styles.btn)}>
        <input
            className={classNames(styles.volumeProgressLine, styles.btn, styles.input)}
            name="range"
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
          />
        </div>
      </div>
    </div>
  );
}
