import { HeaderMenu } from "../../components/HeaderMenu";
import { Section } from "../../components/Section";
import { StreamGraph } from "../../components/StreamGraph/StreamGraph";
import { data } from "../../data/mainPlotData";
import { TextBar } from "../../components/TitleBar";
import { Footer } from "../../components/Footer";
import { Article } from "../../components/Article";
import { RenderBox } from "../../components/RenderBox";
//import { Button } from "../../components/Button";
import { Block } from "../../components/Block";
import { useState, useEffect } from "react";

import styles from "./HomePage.module.scss";
import blogData from "./../../data/emptyData.json";

const DESIRED_ASPECT_RATIO = 0.55;

export const HomePage = () => {
  const [plotWidth, setPlotWidth] = useState(920);
  const [plotHeight, setPlotHeight] = useState(460);

  useEffect(() => {
    const calculateSize = () => {
      const screenWidth = window.innerWidth;
      const width = Math.min(screenWidth * 0.8, 920);
      const height = width * DESIRED_ASPECT_RATIO;

      setPlotWidth(width);
      setPlotHeight(height);
    };

    calculateSize();
    window.addEventListener("resize", calculateSize);
    return () => window.removeEventListener("resize", calculateSize);
  }, []);

  return (
    <div className={styles.homePageContainer}>
      <HeaderMenu />
      <Section>
        <TextBar title="Who am I?" text="I'm an passionate bioarchaeologist, programmer and data visualization enthusiast. Currently I mostly work with Python on some machine learning superisotope stuffs." />
        {data && (
          <StreamGraph data={data} width={plotWidth} height={plotHeight} />
        )}
        <Article bigger = {true}>
          <h2>Recent Posts</h2>
          {blogData.length > 0 ? (
            <RenderBox limit={4} data={blogData} />
          ) : (
            <Block>
              <p>I'm getting there, but it's taking longer than expected. Thanks for your patience; I'll have something to show you shortly.</p>
            </Block>
          )}
        </Article>
      </Section>
      <Footer />
    </div>
  );
};


