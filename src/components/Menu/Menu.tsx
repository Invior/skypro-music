'use client'
import { useState } from "react";
import Image from "next/image";
import styles from "./Menu.module.css";
import MenuLinks from "../MenuLinks/MenuLinks";

const Menu = () => {
const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.mainNav}>
      <div className={styles.navLogo}>
        <Image
          alt="logo"
          className={styles.logoImage}
          src="/img/logo.png"
          width={113}
          height={17}
        />
      </div>
      <div onClick={() => setIsOpen((prev) => !prev)} className={styles.navBurger}>
        <span className={styles.burgerLine} />
        <span className={styles.burgerLine} />
        <span className={styles.burgerLine} />
      </div>
      {isOpen && <MenuLinks />}
    </nav>
  );
};

export default Menu;