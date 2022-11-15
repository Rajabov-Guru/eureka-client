import React, { FC } from "react";
import mainBackground from "../../../assets/images/chalkboard2.jpg";
import styles from "./layout.module.css";
import { IChildren } from "../../../types/main";
import classnames from "classnames";

interface LayoutProps extends IChildren {
  centered?: boolean;
}

const Index: FC<LayoutProps> = ({ children, centered }) => {
  return (
    <div
      style={{ backgroundImage: `url(${mainBackground})` }}
      className={classnames(styles.layout, centered && styles.layout_centered)}
    >
      {children}
    </div>
  );
};

export default Index;
