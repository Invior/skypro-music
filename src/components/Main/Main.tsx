import styles from "./Main.module.css";
import Menu from "../Menu/Menu";
import Search from "../Search/Search";
import SectionTitle from "../SectionTitle/SectionTitle";
import Filter from "../Filter/Filter";
import Playlist from "../Playlist/Playlist";
import Sidebar from "../Sidebar/Sidebar";
import { getAllTracks } from "@/api/getAllTracks";
import { TrackType } from "@/types/tracks";

async function Main() {
  let tracks: TrackType[] = [];
  let error = "";

    try {
        tracks = await getAllTracks()
    } catch (err: unknown) {
        error = err instanceof Error ? "Ошибка при загрузке треков " + err.message : "Неизвестная ошибка";
    }
    return (
            <main className={styles.main}>
                <Menu />
                <div className={styles.mainCenterblock}>
                    <Search />
                    <SectionTitle />
                    <Filter tracks={tracks} />
                    <Playlist tracks={tracks} />
                </div>
                <Sidebar />
            </main>
    );
}

export default Main;
