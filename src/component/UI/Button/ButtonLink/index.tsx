import React, { FC } from "react";
import classnames from "classnames";
import styles from "../button.module.css";
import { Link } from "react-router-dom";
import { IButton } from "../index";

export interface ILink extends IButton {
  to: string;
}

const ButtonLink: FC<ILink> = ({ to, children, fullWidth }) => {
  return (
    <Link
      to={to}
      className={classnames(styles.button, fullWidth && styles.full_width)}
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
