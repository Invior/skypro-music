"use client";
import styles from "./filter.module.css";
import { getUniqueValues } from "@/utils/getUniqueValues";
import { FilterItem } from "./FilterItem/FilterItem";
import { useState } from "react";
import { useAppSelector } from "@/store/store";

const SORT_OPTIONS = ["По умолчанию", "Сначала новые", "Сначала старые"];

export function Filter() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const tracks = useAppSelector((state) => state.tracks.initialPlaylist);

  const handleFilterOpen = (filterName: string) => {
    setActiveFilter((prev) => (prev === filterName ? null : filterName));
  };

  const getUniqueAuthors = getUniqueValues(tracks, "author");
  const getUniqueGenre = getUniqueValues(tracks, "genre");

  const filterData = [
    {
      title: "исполнителю",
      list: getUniqueAuthors,
      value: "author",
      selected: useAppSelector((store) => store.tracks.filterOptions.author),
    },
    {
      title: "году выпуска",
      list: SORT_OPTIONS,
      value: "sort",
      selected: useAppSelector((store) => store.tracks.filterOptions.sort),
    },
    {
      title: "жанру",
      list: getUniqueGenre,
      value: "genre",
      selected: useAppSelector((store) => store.tracks.filterOptions.genre),
    },
  ];

  return (
    <div className={styles.centerblockFilter}>
      <div className={styles.filterTitle}>Искать по:</div>
      {filterData.map((filter) => (
        <FilterItem
          key={filter.title}
          title={filter.title}
          isActive={activeFilter === filter.title}
          handleFilterOpen={handleFilterOpen}
          list={filter.list}
          tracks={tracks}
          value={filter.value}
          selected={filter.selected}
        />
      ))}
    </div>
  );
}
