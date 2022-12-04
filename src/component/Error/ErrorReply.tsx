import React, { FC } from "react";
import styles from "./error.module.css";

interface ErrorProps {
  message: string;
}
const ErrorReply: FC<ErrorProps> = ({ message }) => {
  return <p className={styles.error}>{message || "Invalid data"}</p>;
};

export default ErrorReply;
