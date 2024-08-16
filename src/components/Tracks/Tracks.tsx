'use client'
import { Filter } from "../Filter/Filter";
import { Playlist } from "../Playlist/Playlist";
import styles from "./tracks.module.css"
import { useAppDispatch, useAppSelector } from "@/store/store";
import { getTracks } from "@/api/tracks";
import { useEffect } from "react";
import { setCurrentPlaylist, setInitialPlaylist, setIsLoading } from "@/store/features/tracksSlice";


export function Tracks() {
  const error = useAppSelector((state) => state.tracks.error);
  const dispatch = useAppDispatch();
  useEffect(() => {
    try {
      getTracks().then((res) => {
        dispatch(setCurrentPlaylist(res));
        dispatch(setInitialPlaylist(res));
        dispatch(setIsLoading(false));
      })
    } catch (error) {
      
    }
  }, [dispatch]);
  
  return (
    <>
      {error && error}
      <h2 className={styles.centerblockH2}>Треки</h2>
      <Filter />
      <Playlist />
    </>
  );
}
