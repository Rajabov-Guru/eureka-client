import classnames from "classnames";
import React, { FC } from "react";
import styles from "./grid.module.css";

interface GridProps {
  rows: number;
  children?: React.ReactNode;
}

const Grid: FC<GridProps> = ({ children, rows }) => {
  return (
    <div
      style={{ gridTemplateRows: `repeat(${rows}, 1fr)` }}
      className={classnames(styles.grid_container)}
    >
      {children}
    </div>
  );
};

export default Grid;
