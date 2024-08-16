"use client";
import Image from "next/image";
import styles from "./sidebar.module.css";
import { logout } from "@/store/features/userSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import useInitializeLikedTracks from "@/hooks/useInitializeLikedTracks";
import Link from "next/link";

export function Sidebar() {
  const { user } = useAppSelector((state) => state.user);
  useInitializeLikedTracks();
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className={styles.mainSidebar}>
      {user ? (
        <div className={styles.sidebarPersonal}>
          <p className={styles.sidebarPersonalName}>{user.username}</p>
          <div onClick={handleLogout} className={styles.sidebarIcon}>
            <svg>
              <use xlinkHref="/img/icon/sprite.svg#logout" />
            </svg>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className={styles.sidebarBlock}>
        <div className={styles.sidebarList}>
          <div className={styles.sidebarItem}>
            <Link className={styles.sidebarLink} href="/tracks/category/2">
              <Image
                alt="day's playlist"
                className={styles.sidebarImg}
                src="/img/playlist01.png"
                width={250}
                height={150}
              />
            </Link>
          </div>
          <div className={styles.sidebarItem}>
            <Link className={styles.sidebarLink} href="/tracks/category/3">
              <Image
                alt="day's playlist"
                className={styles.sidebarImg}
                src="/img/playlist02.png"
                width={250}
                height={150}
              />
            </Link>
          </div>
          <div className={styles.sidebarItem}>
            <Link className={styles.sidebarLink} href="/tracks/category/4">
              <Image
                alt="day's playlist"
                className={styles.sidebarImg}
                src="/img/playlist03.png"
                width={250}
                height={150}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
