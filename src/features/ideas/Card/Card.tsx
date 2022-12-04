import React, { FC } from "react";
import classnames from "classnames";
import styles from "./card.module.css";

interface CardProps {
  title: string;
  content: string;
}

const Card: FC<CardProps> = ({ title, content }) => {
  return (
    <div className={classnames(styles.sticker)}>
      <div className={classnames(styles.title)}>{title}</div>
      <div>{content}</div>
    </div>
  );
};

export default Card;
