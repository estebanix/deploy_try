import styles from "./BoxColumn.module.scss";
import { ReactNode } from "react";

interface BoxColumnProps {
    children: ReactNode;
    gapWidth?: number;
}

export const BoxColumn: React.FC<BoxColumnProps> = ({ children, gapWidth }) => {
    const choosedGap = {
        gap: gapWidth ? `${gapWidth}px` : '0',
    };

    return (
        <div className={styles.boxColumnContainer} style={choosedGap}>
            {children}
        </div>
    );
};