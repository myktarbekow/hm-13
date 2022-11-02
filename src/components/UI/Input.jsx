import React from "react";
import styles from "./Input.module.css";

function Input(props) {
  return (
    <div className={styles.Input}>
      <label htmlFor={props.input.id}></label>
      <input {...props.input} />
    </div>
  );
}

export default Input;
