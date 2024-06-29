import React from "react";
import "./sidebar.css";
import navList from "../data/NavList";
import { Link } from "react-router-dom";
function SideBar() {
  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-heading">Pages</li>
        {navList.map((nav) => (
          <Link to={`/${nav.link}`} className="link-reset">
            <li className="nav-item" key={nav._id}>
              <a className="nav-link collapsed" href="#">
                <i className={nav.icon}></i>
                <span>{nav.name}</span>
              </a>
            </li>
          </Link>
        ))}
      </ul>
    </aside>
  );
}

export default SideBar;
