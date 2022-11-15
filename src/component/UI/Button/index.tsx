import classnames from "classnames";
import React, { FC } from "react";
import styles from "./button.module.css";
import { IChildren } from "../../../types/main";

export interface IButton extends IChildren {
  fullWidth?: boolean;
}

interface ButtonProps extends IButton {
  handleClick?: () => void;
}

const Button: FC<ButtonProps> = ({ children, handleClick, fullWidth }) => {
  return (
    <div
      onClick={handleClick}
      className={classnames(styles.button, fullWidth && styles.full_width)}
    >
      {children}
    </div>
  );
};

export default Button;
