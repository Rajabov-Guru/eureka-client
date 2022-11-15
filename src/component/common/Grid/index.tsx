import classnames from "classnames";
import React, { FC } from "react";
import styles from "./grid.module.css";
import { IChildren } from "../../../types/main";

export interface IGrid extends IChildren {
  rows: number;
}

const Grid: FC<IGrid> = ({ children, rows }) => {
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
