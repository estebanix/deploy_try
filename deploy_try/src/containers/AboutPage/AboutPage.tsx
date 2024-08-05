import { useState, useEffect } from "react";
import { HeaderMenu } from "../../components/HeaderMenu";
import { Section } from "../../components/Section";
import { Article } from "../../components/Article";
import { Footer } from "../../components/Footer";
import { BarPlot } from "../../components/BarPlot";
import { data } from "../../components/BarPlot/data";
import styles from "./AboutPage.module.scss";

export const AboutPage = () => {
  const [plotWidth, setPlotWidth] = useState(360);
  const [plotHeight, setPlotHeight] = useState(280);

  useEffect(() => {
    const calculateSize = () => {
      const screenWidth = window.innerWidth;
      let width, height;

      if (screenWidth <= 576) {
        width = Math.min(screenWidth - 20, 360);
        height = width * 0.778;
      } else if (screenWidth <= 991) {
        width = Math.min(screenWidth * 0.8, 660);
        height = width * 0.778;
      } else {
        width = Math.min(screenWidth * 0.6, 720);
        height = width * 0.778;
      }

      setPlotWidth(width);
      setPlotHeight(height);
    };

    calculateSize(); // Call the function immediately
    window.addEventListener("resize", calculateSize); // Add event listener for resize
    return () => window.removeEventListener("resize", calculateSize); // Remove event listener on cleanup
  }, []);

  return (
    <div className={styles.aboutPageContainer}>
      <HeaderMenu />
      <Section>
        <Article bigger={true}>
          <h2>About Me</h2>
          <p>
            Greetings! I am a bioarchaeology graduate student at Charles
            University in Prague, delving into the intriguing world of stable
            isotopes analysis. I am currently pursuing my Master's degree, where
            my thesis focuses on the potential use of machine learning and data
            analysis in provenance assessment using stable strontium isotopes.
          </p>
          <BarPlot data={data} width={plotWidth} height={plotHeight} />
          <p>
            As a dedicated bioarchaeology student, I am increasingly drawn to
            the evolving landscape of technology and its role in archaeological
            research. My aspiration is to bridge the gap between traditional
            archaeology and modern computational methods. I am particularly
            intrigued by the possibilities in data science for archaeology,
            seeking new ways to uncover ancient stories and interpret historical
            data more comprehensively.
          </p>
          <p>
            In my current role, I divide my time between programming and
            laboratory work. Behind the computer, I specialize in Python and R,
            developing algorithms to better understand and evaluate stable
            isotope data. In the laboratory, I prepare samples for stable
            isotope analyses, ensuring precision and accuracy in every step of
            the process.
          </p>
          <p>
            Outside of my professional pursuits, I strive to perform as a hybrid
            athlete, balancing the demanding disciplines of bodybuilding and
            triathlon training. This unique combination challenges me physically
            and mentally, helping me clear my head, stay healthy, and find
            balance in my busy life. When I’m not training, you’ll often find me
            in the kitchen, where I love experimenting with new recipes and
            honing my culinary skills. I also enjoy creating web applications,
            focusing on frontend development with React and TypeScript. Above
            all, I cherish spending quality time with my loved ones, as they
            provide constant support and joy in my life.
          </p>
          <p>
            I am currently developing two Python packages. The first focuses on
            interpreting migration patterns using Strontium (Sr) stable
            isotopes. The second automates the scoring of teeth based on dental
            pathologies.
          </p>
        </Article>
      </Section>
      <Footer />
    </div>
  );
};
