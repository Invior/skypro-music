'use client'
import styles from "../../layout.module.css";
import { getCategoryTracks } from "@/api/tracks";
import { Filter } from "@/components/Filter/Filter";
import { Playlist } from "@/components/Playlist/Playlist";
import { setCurrentPlaylist } from "@/store/features/tracksSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useEffect, useRef } from "react";

type CategoryProps = {
  params: {
    id: string;
  }
};

function Category({ params }: CategoryProps) {
  const dispatch = useAppDispatch();
  const {initialPlaylist} = useAppSelector((state) => state.tracks);

  const name = useRef();
  
  useEffect(() => {
    try {
      getCategoryTracks(params.id).then((res) => {
        name.current = res.name;
        const items = res.items;
        const tracks = items.map((item: number) => initialPlaylist.filter((track) => track._id === item)).flat();
        dispatch(setCurrentPlaylist(tracks));
      })
    } catch (error) {
      
    }
  }, [dispatch, params.id, initialPlaylist, name]);
  

  return (
    <>
      <h2 className={styles.centerblockH2}>{name.current}</h2>
      <Filter />
      <Playlist />
    </>
  );
};

export default Category;
