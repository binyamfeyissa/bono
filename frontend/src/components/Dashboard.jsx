import React, { useEffect, useState } from "react";
import "./dashboard.css";
import Card from "./Card";
import Reports from "./Reports";
import RecentSales from "./RecentSales";
import OrdersItem from "./OrdersItem";
import MostSelled from "./Mostselled";
function Dashboard() {
  const cards = [
    {
      _id: 1,
      name: "Sales",
      icon: "bi bi-cart",
      amount: "145 Orders",
    },
    {
      _id: 2,
      name: "Revenue",
      icon: "bi bi-currency-dollar",
      amount: "32,246 Birr",
    },
    {
      _id: 3,
      name: "Customers",
      icon: "bi bi-currency-dollar",
      amount: 324,
    },
  ];

  // const fetchData = () => {
  //   fetch("http://localhost:4000/cards")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setCards(data);
  //     })
  //     .catch((e) => console.log(e.message));
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <section className="dashboard section">
      <div className="row">
        <div className="col-lg-7">
          <div className="row">
            {/* {cards &&
              cards.length > 0 &&
              cards.map((card) => <Card key={card._id} card={card} />)} */}
            <div className="make-grid">
              <div className="col-xxl-4 col-md-6">
                <div className="card info-card sales-card">
                  <div className="card-body">
                    <h5 className="card-title">Today</h5>
                    <div className="d-flex align-items-conter">
                      <div className="ps-3">
                        <h4 className=" pt-2 ps-1">12,090 Birr</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-md-6">
                <div className="card info-card menu-card">
                  <div className="card-body">
                    <h5 className="card-title">Menus</h5>
                    <div className="d-flex align-items-conter">
                      <div className="ps-3">
                        <h4 className=" pt-2 ps-1">45</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-md-6">
                <div className="card info-card order-card">
                  <div className="card-body">
                    <h5 className="card-title">Orders</h5>
                    <div className="d-flex align-items-conter">
                      <div className="ps-3">
                        <h4 className=" pt-2 ps-1">89</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-md-6">
                <div className="card info-card transaction-card">
                  <div className="card-body">
                    <h5 className="card-title">Transaction</h5>
                    <div className="d-flex align-items-conter">
                      <div className="ps-3">
                        <h4 className=" pt-2 ps-1">89,000 Birr</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <OrdersItem />
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <Reports />
          <MostSelled />
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
