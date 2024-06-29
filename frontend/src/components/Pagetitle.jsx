import React from "react";
import "./pagetitle.css";
function Pagetitle({ page }) {
  return (
    <div className="pagetitle">
      <h1>Welcome Back</h1>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">
              <i className="bi bi-house-door"></i>
            </a>
          </li>
          <li className="breadcrumb-item active">{page}</li>
        </ol>
      </nav>
    </div>
  );
}

export default Pagetitle;
