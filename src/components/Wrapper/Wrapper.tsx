import styles from "./Wrapper.module.css";
import Main from "../Main/Main";
import Bar from "../Bar/Bar";
import { CurrentTrackProvider } from "@/contexts/CurrentTrackProvider";

const Wrapper = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <CurrentTrackProvider>
                    <Main />
                    <Bar />
                </CurrentTrackProvider>
                <footer className={styles.footer} />
            </div>
        </div>
    );
}

export default Wrapper;