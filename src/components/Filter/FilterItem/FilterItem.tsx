"use client";
import classNames from "classnames";
import styles from "./filterItem.module.css";
import { TrackType } from "@/types/tracks";
import { useAppDispatch } from "@/store/store";
import { setFilters } from "@/store/features/tracksSlice";

type FilterItemProps = {
  title: string;
  isActive: boolean;
  handleFilterOpen: (newFilter: string) => void;
  list: string[];
  value: string;
  selected: string[] | string;
  tracks: TrackType[];
};

export function FilterItem({
  title,
  isActive,
  handleFilterOpen,
  list,
  value,
  selected,
  tracks,
}: FilterItemProps) {
  const dispatch = useAppDispatch();
  
  const handleFilter = (item: string) => {
    if (value === "sort") {
      dispatch(setFilters({sort: item}));
      return;
    }
    if (selected instanceof Array) {
      dispatch(
        setFilters({
          [value]: selected.includes(item)
            ? selected.filter((el) => el !== item)
            : [...selected, item],
        })
      );
    }
  };

  return (
    <div className={styles.filterWrapper}>
      {selected.length > 0 && value !== "sort" ? (
        <div className={styles.counter}>{selected.length}</div>
      ) : null}
      <button
        onClick={() => handleFilterOpen(title)}
        className={classNames(
          isActive ? styles.filterButtonActive : styles.filterButton,
          styles.btnText
        )}
      >
        {title}
      </button>

      {isActive && (
        <div className={styles.filterContainer}>
          <ul className={styles.filterBox}>
            {list.map((item) => (
              <li key={item} className={classNames(styles.filterList, {
                [styles.filterListActive]:
                  value === "sort"
                    ? selected === item
                    : selected.includes(item),
              })}>
                <p
                  onClick={() => handleFilter(item)}
                >
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
