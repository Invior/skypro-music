"use client";
import { setCurrentPlaylist } from "@/store/features/tracksSlice";
import { Filter } from "../Filter/Filter";
import { Playlist } from "../Playlist/Playlist";
import styles from "./favoriteTracks.module.css";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useEffect } from "react";

export function FavoriteTracks() {
  const allTracks = useAppSelector((state) => state.tracks.favoritePlaylist);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setCurrentPlaylist(allTracks));
  }, [dispatch, allTracks]);

  return (
    <>
      <h2 className={styles.centerblockH2}>Мои треки</h2>
      <Filter />
      <Playlist  />
    </>
  );
}
