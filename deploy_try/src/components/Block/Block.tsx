import styles from "./Block.module.scss";

interface BlockProps {
    children: React.ReactNode;
}

export const Block: React.FC <BlockProps> = ({children}): JSX.Element => {
    return (
        <div className={styles.blockContainer}>
            {children}
        </div>
    );
}
