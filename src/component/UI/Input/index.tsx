import React, { FC } from "react";
import classnames from "classnames";
import styles from "./input.module.css";
import { IInput } from "../../../types/main";

const Input: FC<IInput> = ({ type, value, placeholder, onChange }) => {
  return (
    <input
      type={type ? type : "text"}
      placeholder={placeholder ? placeholder : ""}
      value={value ? value : undefined}
      onChange={onChange}
      className={classnames(styles.input)}
    />
  );
};

export default Input;
