import React from "react";
import OrdersTable from "./OrdersTable";

function OrdersItem() {
  const items = [
    {
      _id: 1,
      name: "Cheese Burger, Pizza, Tibs",
      count: 3,
      price: 354,
      arivaltime: "2024-03-21, Thu, 03:34",
      transaction: "Paid",
      status: "Pending",
    },
    {
      _id: 2,
      name: "Vegi Pizza, Tibs, Shiro",
      count: 3,
      price: 465,
      arivaltime: "2024-03-21, Thu, 03:34",
      transaction: "Not Paid",
      status: "Accepted",
    },
    {
      _id: 3,
      name: "Beyaynet, Wine",
      count: 2,
      price: 200,
      arivaltime: "2024-03-21, Thu, 03:34",
      transaction: "Paid",
      status: "Completed",
    },
    {
      _id: 4,
      name: "Kitfo",
      count: 1,
      price: 400,
      arivaltime: "2024-03-21, Thu, 03:34",
      transaction: "Paid",
      status: "Completed",
    },
    {
      _id: 5,
      name: "Tibs, Coca",
      count: 2,
      price: 600,
      arivaltime: "2024-03-21, Thu, 03:34",
      transaction: "Paid",
      status: "Completed",
    },
    {
      _id: 6,
      name: "Coca Cola, Wine",
      count: 2,
      price: 60,
      arivaltime: "2024-03-21, Thu, 03:34",
      transaction: "Paid",
      status: "Completed",
    },
  ];

  return (
    <div className="card recent-sales overflow-auto">
      <div className="card-body">
        <h5 className="card-title">Orders</h5>
        <OrdersTable items={items} />
      </div>
    </div>
  );
}

export default OrdersItem;
