import React, { FC } from "react";
import styles from "./stack.module.css";
import classnames from "classnames";

export interface StackProps {
  spacing?: number;
  children?: React.ReactNode;
}

const Stack: FC<StackProps> = ({ children, spacing }) => {
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
