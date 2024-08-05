import { HeaderMenu } from "../../components/HeaderMenu";
import { Footer } from "../../components/Footer";
import { Section } from "../../components/Section";
import { Article } from "../../components/Article";
import { Block } from "../../components/Block";
import styles from "./AppsPage.module.scss";
import { BoxColumn } from "../../components/BoxColumn";

export const AppsPage = () => {
  return (
    <div className={styles.appsPageContainer}>
      <HeaderMenu />
      <Section>
        <Article bigger={true}>
          <h2>Contact</h2>
          <Block>
            <BoxColumn gapWidth={6}>
              <p style={{marginBottom: 30}}>
                I'm always excited to connect with fellow researchers and
                enthusiasts. If you have any questions, collaborations, or just
                want to connect, feel free to reach out. I look forward to
                hearing from you!
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:kertes@arup.cas.cz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  kertes@arup.cas.cz
                </a>
              </p>
              <p>
                Twitter:{" "}
                <a
                  href="https://twitter.com/SamuelKertes"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @SamuelKertes
                </a>
              </p>
            </BoxColumn>
          </Block>
        </Article>
      </Section>
      <Footer />
    </div>
  );
};
