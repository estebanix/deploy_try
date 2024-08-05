import { useState } from 'react';
import { headerMenuItems } from "../../utils/constans/headerMenuItems";
import { Link } from "react-router-dom";
import { Image } from "../Image";

import styles from "./HeaderMenu.module.scss";
import photo from "./../../../public/images/photo.jpg";

export const HeaderMenu = () => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuVisible(!isMobileMenuVisible);
  };

  return (
    <div className={styles.headerMenuContainer}>
      <Image src={photo} radius={true} />
      <div
        className={`${styles.mobileMenuButton} ${isMobileMenuVisible ? styles.menuOpen : ''}`}
        onClick={toggleMobileMenu}
      >
        <div className={styles.hamburger}></div>
        <div className={styles.hamburger}></div>
        <div className={styles.hamburger}></div>
      </div>
      <div
        className={`${styles.headerMenuItemBox} ${isMobileMenuVisible ? styles.show : ''}`}
      >
        {headerMenuItems.map((item, index) => (
          <Link key={index} to={item.to} className={styles.headerMenuLink}>
            <p>{item.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};
