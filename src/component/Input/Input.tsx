import React, { FC } from "react";
import classnames from "classnames";
import styles from "./input.module.css";

interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({ type, value, placeholder, onChange }) => {
  return (
    <input
      type={type ? type : "text"}
      placeholder={placeholder ? placeholder : ""}
      value={value ? value : ""}
      onChange={onChange}
      className={classnames(styles.input)}
    />
  );
};

export default Input;
