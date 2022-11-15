import classnames from "classnames";
import React, { FC } from "react";
import styles from "./board.module.css";
import { Link } from "react-router-dom";
import { LinkProps } from "../UI/Button/ButtonLink/ButtonLink";

const BoardCard: FC<LinkProps> = ({ children, to }) => {
  return (
    <Link to={to} className={classnames(styles.card)}>
      {children}
    </Link>
  );
};

export default BoardCard;
