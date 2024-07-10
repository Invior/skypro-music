import styles from "./Main.module.css";
import Menu from "../Menu/Menu";
import Search from "../Search/Search";
import SectionTitle from "../SectionTitle/SectionTitle";
import Filter from "../Filter/Filter";
import Playlist from "../Playlist/Playlist";
import Sidebar from "../Sidebar/Sidebar";

const Main = () => {
    return (
        <main className={styles.main}>
            <Menu />
            <div className={styles.mainCenterblock}>
                <Search />
                <SectionTitle />
                <Filter />
                <Playlist />
            </div>
            <Sidebar />
        </main>
        );
}

export default Main;