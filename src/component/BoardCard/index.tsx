import classnames from "classnames";
import React, { FC } from "react";
import styles from "./board.module.css";
import { IChildren } from "../../types/main";
import { Link } from "react-router-dom";
import { paths } from "../../routing/routes";
import { ILink } from "../UI/Button/ButtonLink";

const BoardCard: FC<ILink> = ({ children, to }) => {
  return (
    <Link to={to} className={classnames(styles.card)}>
      {children}
    </Link>
  );
};

export default BoardCard;
