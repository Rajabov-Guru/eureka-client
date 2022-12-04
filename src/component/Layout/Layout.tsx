import React, { FC } from "react";
import mainBackground from "../../assets/images/chalkboard2.jpg";
import styles from "./layout.module.css";
import classnames from "classnames";

interface LayoutProps {
  centered?: boolean;
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children, centered }) => {
  return (
    <div
      style={{ backgroundImage: `url(${mainBackground})` }}
      className={classnames(styles.layout, centered && styles.layout_centered)}
    >
      {children}
    </div>
  );
};

export default Layout;
