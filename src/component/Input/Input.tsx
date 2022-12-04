import React from "react";
import classnames from "classnames";
import styles from "./input.module.css";

interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type, value, placeholder, onChange }, ref) => {
    return (
      <input
        ref={ref}
        type={type ? type : "text"}
        placeholder={placeholder ? placeholder : ""}
        value={value ? value : ""}
        onChange={onChange}
        className={classnames(styles.input)}
      />
    );
  }
);

export default Input;
