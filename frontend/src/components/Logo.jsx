import React from "react";
import "./logo.css";
import logoimg from "../images/logo.png";
function Logo() {
  const handleToggleSideBar = () => {
    document.body.classList.toggle("toggle-sidebar");
  };
  return (
    <div className="d-flex align-items-center justify-content-between">
      <i
        id="toggle-btn"
        className="bi bi-list toggle-sidebar-btn"
        onClick={handleToggleSideBar}
      ></i>
      <a href="/" className="logo d-flex align-items-center">
        <img src={logoimg} alt="" />
        <span className="d-none d-lg-block">Bono</span>
      </a>
    </div>
  );
}

export default Logo;
