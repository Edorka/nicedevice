import React from 'react';
import styles from './FilterTool.module.scss';
import Switch from './components/Switch';


const OnlyActive = ({ filter, setFilter }) => {
  const updateOnlyActive = active =>
 setFilter({ ...filter, onlyActive: active });
 return (
  <div className={styles.control}>
    <Switch onChange={updateOnlyActive} ></Switch>
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
