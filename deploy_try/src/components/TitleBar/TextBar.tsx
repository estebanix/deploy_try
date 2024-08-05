import styles from "./TextBar.module.scss";

interface TextBarProps {
    title?: string;
    text: string;
}

export const TextBar: React.FC <TextBarProps> = ({text, title}) => {
    return (
        <div className={styles.textBar}>
            <h1 className={styles.textBarTitle}>{title}</h1>
            <h2 className={styles.textBarText}>{text}</h2>
        </div>
    );
}