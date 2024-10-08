import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../context/Context";
import { HeaderMenu } from "../../components/HeaderMenu";
import { Footer } from "../../components/Footer";
import { Section } from "../../components/Section";
import { Article } from "../../components/Article";
import Markdown from "react-markdown";
import { BoxRow } from "../../components/BoxRow";
import { Button } from "../../components/Button";
import { RenderBox } from "../../components/RenderBox";
import { faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import styles from "./CurrentPostPage.module.scss";
import blogData from "./../../data/blogData.json";

export const CurrentPostPage = () => {
  const { name } = useParams();
  const { currentBlog } = useContext(Context);
  
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 1024);
    };

    window.addEventListener("resize", handleResize);
    
    // Cleanup on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const post = currentBlog.find((post) => post.title === name);

  if (!post) {
    return <p>Blog post not found.</p>;
  }

  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    window.location.href
  )}&text=${encodeURIComponent(post.title)}`;
  const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    window.location.href
  )}`;

  return (
    <div className={styles.currentPostPageContainer}>
      <HeaderMenu />
      <Section>
        {/* <SideProfil />  saving it for responsiveness bigger screen */}
        <Article bigger={true}>
          <h2>{post.title}</h2>
          <Markdown>{post.content}</Markdown>
          <BoxRow gapWidth={20}>
            <Button
              text="Twitter"
              icon={faXTwitter}
              shareUrl={twitterShareUrl}
            />
            <Button
              text="LinkedIn"
              icon={faLinkedin}
              shareUrl={linkedinShareUrl}
            />
          </BoxRow>
          <RenderBox curr={post.title} data={blogData} limit={2} row={isWideScreen} />
        </Article>
      </Section>
      <Footer />
    </div>
  );
};
