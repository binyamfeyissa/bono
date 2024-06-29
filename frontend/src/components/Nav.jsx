import React from "react";
import "./logo.css";
import NavAvatar from "./NavAvatar";
import NavNotice from "./NavNotice";
function Nav() {
  return (
    <nav className="header-nav ms-auto">
      <ul className="d-flex align-items-center pe-5">
        <NavNotice />
        <NavAvatar />
      </ul>
    </nav>
  );
}

export default Nav;
