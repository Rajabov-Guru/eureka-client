import React, { FC } from "react";
import { IChildren } from "../../../types/main";
import styles from "./stack.module.css";
import classnames from "classnames";

export interface IStack extends IChildren {
  spacing?: number;
}

const Stack: FC<IStack> = ({ children, spacing }) => {
  return (
    <div
      style={{ gap: spacing ? spacing * 20 : 20 }}
      className={classnames(styles.stack)}
    >
      {children}
    </div>
  );
};

export default Stack;
