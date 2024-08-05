import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

interface ButtonProps {
  text: string;
  to?: string;
  icon?: IconProp;
  shareUrl?: string;
}

export const Button: React.FC<ButtonProps> = ({ text, to, icon, shareUrl }) => {
  if (to) {
    return (
      <Link to={to}>
        <div className={styles.button}>{text}</div>
      </Link>
    );
  }

  const handleShare = () => {
    window.open(shareUrl, "_blank");
  };

  return (
    <button className={styles.button} onClick={handleShare}>
      {icon && <FontAwesomeIcon icon={icon} />} {text}
    </button>
  );
};
