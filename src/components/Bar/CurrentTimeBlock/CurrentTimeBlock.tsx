import styles from "./currentTimeBlock.module.css";
import { timeFormat } from "@/utils/helpers";

type CurrentTimeBlockProps = {
  currentTime: number;
  duration: number;
};

export const CurrentTimeBlock = ({
  currentTime,
  duration,
}: CurrentTimeBlockProps) => {
  const allTimeBar = timeFormat(duration);
  const currentTimeBar = timeFormat(currentTime);

  return (
    <div className={styles.timeBlock}>{`${currentTimeBar} / ${allTimeBar}`}</div>
  );
};
