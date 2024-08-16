import { Navigation } from "@/components/Navigation/Navigation";
import styles from "./layout.module.css";
import { Search } from "@/components/Search/Search";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { Bar } from "@/components/Bar/Bar";

export default function TracksLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
          <main className={styles.main}>
            <Navigation />
            <div className={styles.mainCenterblock}>
              <Search />
              {children}
            </div>
            <Sidebar />
          </main>
          <Bar />
        <footer />
      </div>
    </div>
  );
}
