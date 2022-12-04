import classnames from "classnames";
import React, { FC } from "react";
import styles from "./button.module.css";

export interface ButtonProps {
  handleClick?: () => void;
  fullWidth?: boolean;
  children?: React.ReactNode;
}

const Button: FC<ButtonProps> = ({ children, handleClick, fullWidth }) => {
  return (
    <div
      onClick={handleClick}
      className={classnames(styles.Button, fullWidth && styles.Button)}
    >
      {children}
    </div>
  );
};

export default Button;
