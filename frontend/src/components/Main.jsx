import React from "react";
import "./main.css";
import Pagetitle from "./Pagetitle";
import Header from "./Header";
import SideBar from "./SideBar";

function Main({ name, children }) {
  return (
    <>
      <Header />
      <SideBar />
      <main id="main" className="main">
        <Pagetitle page={name} />
        {children}
      </main>
    </>
  );
}

export default Main;
