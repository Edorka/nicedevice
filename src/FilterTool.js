import React from "react";
import styles from "./FilterTool.module.scss";

const SwitchControl = ({onChange}) => (
    <label className={styles.switch}>
      <input
        type="checkbox"
        onChange={({ target }) => onChange(target.checked)}
      ></input>
      <span className="slider round"></span>
    </label>
)

const OnlyActive = ({ filter, setFilter }) => {
  const updateOnlyActive = active =>
 setFilter({ ...filter, onlyActive: active });
 return (
  <div className={styles.control}>
    <SwitchControl onChange={updateOnlyActive} ></SwitchControl>
    Active only
  </div>
);
}

const FilterTool = ({ filter, setFilter }) => {

  return (
    <div className={styles.filterTool}>
      <OnlyActive filter={filter} setFilter={setFilter}></OnlyActive>
    </div>
  );
};

export default FilterTool;
