import styles from "./BoxRow.module.scss";
import { ReactNode } from "react";

interface BoxRowProps {
  children: ReactNode;
  gapWidth?: number;
}

export const BoxRow: React.FC<BoxRowProps> = ({ children, gapWidth }) => {
  const choosedGap = {
    gap: gapWidth ? `${gapWidth}px` : "0",
  };

  return (
    <div className={styles.boxRowContainer} style={choosedGap}>
      {children}
    </div>
  );
};
