import React, { useState } from "react";
import "./card.css";
function Card({ card }) {
  const [filter, setFilter] = useState("Today");
  const handleFilterChange = (filter) => {
    setFilter(filter);
  };
  return (
    <div className="col-xxl-4 col-md-6">
      <div className="card info-card sales-card">
        <div className="card-body">
          <h5 className="card-title">{card.name}</h5>
          <div className="d-flex align-items-conter">
            <div className="ps-3">
              <h4 className=" pt-2 ps-1">{card.amount}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
