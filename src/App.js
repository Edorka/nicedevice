import React, { useState } from "react";
import "./App.scss";
import DevicesMap from "./DeviceMap";
import FilterTool from "./FilterTool";

const _DEFAULT_FILTER = { onlyActive: false };

function App() {
  const [filter, setFilter] = useState(_DEFAULT_FILTER);
  return (
    <div className="App">
      <header className="App-header">
        <span className="title">Nice Device</span>
        <FilterTool filter={filter} setFilter={setFilter}></FilterTool>
      </header>
      <DevicesMap filter={filter}></DevicesMap>
    </div>
  );
}

export default App;
