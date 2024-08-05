import styles from "./Article.module.scss";

interface ArticleProps {
    children: React.ReactNode;
    bigger?: boolean; 
}

export const Article: React.FC<ArticleProps> = ({ children, bigger }) => {
    const containerStyle = bigger ? { width: '100%' } : {};

    return (
        <div className={styles.articleContainer} style={containerStyle}>
            {children}
        </div>
    );
}
