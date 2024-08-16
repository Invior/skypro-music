'use client'
import { useState } from "react";
import { Menu } from "../Menu/Menu";
import styles from "./navigation.module.css";
import Image from "next/image";
import Link from "next/link";

export function Navigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <nav className={styles.mainNav}>
      <div className={styles.navLogo}>
        <Link href="/tracks">
        <Image
          className={styles.logoImage}
          src="/img/logo.png"
          alt="Skypro-logo"
          width={114}
          height={17}
        />
        </Link>
      </div>
      <div onClick={() => setIsOpen((prev) => !prev)} className={styles.navBurger}>
        <span className={styles.burgerLine} />
        <span className={styles.burgerLine} />
        <span className={styles.burgerLine} />
      </div>
      {isOpen && <Menu />}
    </nav>
  );
}
