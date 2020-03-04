import React from "react";
import styles from "./Switch.module.scss";

const Switch = ({onChange}) =>
  <label className={styles.switch}>
    <input
      type="checkbox"
      onChange={({ target }) => onChange(target.checked)}
    ></input>
    <span className="slider round"></span>
  </label>
export default Switch; 
