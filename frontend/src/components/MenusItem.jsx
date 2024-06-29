import React from "react";
import MenusTable from "./MenusTable";

function MenusItem() {
  const items = [
    {
      _id: 1,
      name: "Cheese Burger",
      price: 354,
      discription: "Cheese, Eggs, Bread, Tomattoo",
      catagory: "Meal",
    },
    {
      _id: 2,
      name: "Vegi Pizza",
      price: 465,
      discription: "Eggs, Cheese, Tomattoo",
      catagory: "Meal",
    },
    {
      _id: 3,
      name: "Coca Cola",
      price: 60,
      discription: "Coca",
      catagory: "Drinks",
    },
  ];

  return (
    <div className="card recent-sales overflow-auto">
      <div className="card-body">
        <h5 className="card-title">Menus</h5>
        <MenusTable items={items} />
      </div>
    </div>
  );
}

export default MenusItem;
