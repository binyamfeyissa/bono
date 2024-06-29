import React, { useState, useEffect } from "react";
import "./recentsales.css";
import CardFilter from "./CardFilter";
import RecentSalesTable from "./RecentSalesTable";

function RecentSales() {
  const items = [
    {
      _id: 1,
      preview: " .. /assets/items/product-1.jpg",
      name: "Ut inventore ipsa voluptas nulla",
      price: 64,
      sold: 124,
    },
    {
      id: 2,
      preview: " .. /assets/items/product-2.jpg",
      name: "Exercitationem similique doloremque",
      price: 46,
      sold: 98,
    },
    {
      _id: 3,
      preview: " .. /assets/items/product-3.jpg",
      name: "Doloribus nisi exercitationem",
      price: 59,
      sold: 74,
    },
  ];
  const [filter, setFilter] = useState("Today");
  const handleFilterChange = (filter) => {
    setFilter(filter);
  };
  return (
    <div className="card recent-sales overflow-auto">
      <CardFilter filterChange={handleFilterChange} />

      <div className="card-body">
        <h5 className="card-title">
          Recent Sales <span>| {filter}</span>
        </h5>
        <RecentSalesTable items={items} />
      </div>
    </div>
  );
}

export default RecentSales;
