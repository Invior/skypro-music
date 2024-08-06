import styles from "./Wrapper.module.css";
import Main from "../Main/Main";
import Bar from "../Bar/Bar";

const Wrapper = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                    <Main />
                    <Bar />
                <footer className={styles.footer} />
            </div>
        </div>
    );
}

export default Wrapper;