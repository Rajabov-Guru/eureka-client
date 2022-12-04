import React, { FC } from "react";
import classnames from "classnames";
import styles from "../button.module.css";
import { Link } from "react-router-dom";
import { ButtonProps } from "../Button";

export interface LinkProps extends ButtonProps {
  to: string;
}

const ButtonLink: FC<LinkProps> = ({ to, children, fullWidth }) => {
  return (
    <Link
      to={to}
      className={classnames(styles.Button, fullWidth && styles.Full_width)}
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
