import React, { useState } from "react";
import CardFilter from "./CardFilter";
import MostSelledChart from "./MostSelledChart";

function MostSelled() {
  const [filter, setFilter] = useState("Today");
  const handleFilterChange = (filter) => {
    setFilter(filter);
  };
  return (
    <div className="card">
      <CardFilter filterChange={handleFilterChange} />

      <div className="card-body pb-0">
        <h5 className="card-title">
          Popular Menu <span>| {filter}</span>
        </h5>
        <MostSelledChart />
      </div>
    </div>
  );
}

export default MostSelled;
