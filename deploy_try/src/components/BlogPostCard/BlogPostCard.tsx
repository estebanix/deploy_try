import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { Image } from "../Image";

import styles from "./BlogPostCard.module.scss";

interface BlogPostCardProps {
  title: string;
  date: string;
  content: string;
  img: string;
}

export const BlogPostCard: React.FC<BlogPostCardProps> = ({
  title,
  date,
  content,
  img,
}) => {
  return (
    <div className={styles.blogPostCardContainer}>
      <Link to={`/blog/${title}`}>
        <h2>{title}</h2>
      </Link>
      <p>
        <FontAwesomeIcon icon={faClock} /> {date}
      </p>
      <h4>{content}</h4>
      <Image src={`/images/${img}`} />
    </div>
  );
};
