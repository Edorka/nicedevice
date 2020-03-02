import React from "react";
import styles from "./FilterTool.module.scss";

const OnlyActive = ({ onChange }) => (
  <div className={styles.control}>
    <label className={styles.switch}>
      <input
        type="checkbox"
        onChange={({ target }) => onChange(target.checked)}
      ></input>
      <span className="slider round"></span>
    </label>
    Active only
  </div>
);

const FilterTool = ({ filter, setFilter }) => {
  const updateOnlyActive = active =>
    setFilter({ ...filter, onlyActive: active });
  return (
    <div className={styles.filterTool}>
      <OnlyActive onChange={updateOnlyActive}></OnlyActive>
    </div>
  );
};

export default FilterTool;
