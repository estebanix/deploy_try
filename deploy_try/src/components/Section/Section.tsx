import styles from "./Section.module.scss";

interface SectionProps {
    children: React.ReactNode;
}

export const Section: React.FC <SectionProps> = ({children}) => {
    return(
        <div className={styles.sectionContainer}>
            {children}
        </div>
    );
}