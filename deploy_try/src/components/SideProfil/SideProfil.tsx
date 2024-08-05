import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Image } from "../Image";

import styles from "./SideProfil.module.scss";
import photo from "./../../../public/images/photo.jpg";

export const SideProfil = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={styles.sideProfilContainer}
      style={{ top: scrollPosition <= 50 ? "10%" : "0" }}
    >
      <Image src={photo} radius={true} />
      <h2>Samuel Kertés</h2>
      <p>Dovi Dopi Do</p>
      <ul>
        <li>
          <FontAwesomeIcon icon={faLocationDot} /> Prague
        </li>
        <li>
          <a href="https://www.linkedin.com/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} className={styles.linkedin} /> LinkedIn
          </a>
        </li>
        <li>
          <a href="mailto:samuelkertes@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} className={styles.envelope} /> Email
          </a>
        </li>
      </ul>
    </div>
  );
};
