import { HeaderMenu } from "../../components/HeaderMenu";
import { Section } from "../../components/Section";
import { Footer } from "../../components/Footer";
import { Article } from "../../components/Article";
import { RenderBox } from "../../components/RenderBox";
import { Block } from "../../components/Block";

import blogData from "./../../data/blogData.json";

import styles from "./BlogPage.module.scss";

export const BlogPage: React.FC = (): JSX.Element => {
  return (
    <div className={styles.blogPageContainer}>
      <HeaderMenu />
      <Section>
        <Article bigger = {true}>
          <h2>Blog</h2>
          {blogData.length > 0 ? (
            <RenderBox limit={4} data={blogData} />
          ) : (
            <Block>
              <p>I'm making progress, but it's a bit slower than anticipated. Hang in there—I'll have something exciting to share with you soon.</p>
            </Block>
          )}
        </Article>
      </Section>
      <Footer />
    </div>
  );
};
