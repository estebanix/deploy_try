import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faResearchgate,
} from "@fortawesome/free-brands-svg-icons";

import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>SOCIALS:</p>
      <ul>
        <a href="https://github.com/estebanix">
          <li className="nav-li">
            <FontAwesomeIcon style={{ color: "#000000" }} icon={faGithub} />{" "}
            GITHUB
          </li>
        </a>
        <a href="https://www.linkedin.com/in/samuel-kert%C3%A9s-4b5513292/">
          <li className="nav-li">
            <FontAwesomeIcon
              style={{ color: "#0a66c2" }}
              icon={faLinkedin}
            />{" "}
            LINKEDIN
          </li>
        </a>
        <a href="https://www.researchgate.net/profile/Samuel-Kertes">
          <li className="nav-li">
            <FontAwesomeIcon
              style={{ color: "#79E9D3" }}
              icon={faResearchgate}
            />{" "}
            RESEARCH GATE
          </li>
        </a>
      </ul>
    </footer>
  );
};
