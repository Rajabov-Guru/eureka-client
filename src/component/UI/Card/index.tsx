import React, { FC } from "react";
import classnames from "classnames";
import styles from "./card.module.css";
import { ICard } from "../../../types/main";

const Card: FC<ICard> = ({ title, content }) => {
  return (
    <div className={classnames(styles.sticker)}>
      <div className={classnames(styles.title)}>{title}</div>
      <div>{content}</div>
    </div>
  );
};

export default Card;
