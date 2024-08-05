import { BlogPostCard } from "../BlogPostCard";

import styles from "./RenderBox.module.scss";

interface dataProps {
  title: string;
  date: string;
  content: string;
  img: string;
}

interface RenderBoxProps {
  data?: dataProps[];
  limit: number;
  row?: boolean;
  curr?: string;
}

export const RenderBox: React.FC<RenderBoxProps> = ({
  data,
  limit,
  row,
  curr,
}) => {
  const filteredData = data?.filter((post) => post.title !== curr) || [];

  const limitedData = filteredData.slice(0, limit);

  const containerStyle: React.CSSProperties = {
    flexDirection: row ? "row" : "column",
    marginTop: row ? "100px" : undefined,
    gap: row ? "100px" : undefined,
  };

  return (
    <div className={styles.renderBoxContainer} style={containerStyle}>
      {limitedData.map((dat, index) => (
        <BlogPostCard
          key={index}
          title={dat.title}
          date={dat.date}
          content={dat.content}
          img={dat.img}
        />
      ))}
    </div>
  );
};
