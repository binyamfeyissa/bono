import React, { useState } from "react";
import ReportCharts from "./ReportCharts";
import CardFilter from "./CardFilter";

function Reports() {
  const [filter, setFilter] = useState("Today");
  const handleFilterChange = (filter) => {
    setFilter(filter);
  };
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">
          <div>
            Reports | <span>{filter}</span>
          </div>

          <CardFilter filterChange={handleFilterChange} />
        </h5>
        <ReportCharts />
      </div>
    </div>
  );
}

export default Reports;
