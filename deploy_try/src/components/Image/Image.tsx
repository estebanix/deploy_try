import styles from "./Image.module.scss";

interface ImageProps {
    src: string;
    radius?: boolean;
}

export const Image: React.FC <ImageProps> = ({src, radius}) => {
    const imageRadius = {
        borderRadius: radius ? '50%' : '0',
      };
    return (
        <img className={styles.logo} src={src} style={imageRadius} />
    );
}