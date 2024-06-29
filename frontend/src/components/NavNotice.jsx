import React from "react";

function NavNotice() {
  return (
    <li className="nav-item dropdown me-3">
      <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
        <i className="bi bi-bell"></i>
        <span className="badge bg-primary badge-number">2</span>
      </a>
      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
        <li className="dropdown-header">
          You have 2 new notifications
          <a href="#">
            <span className="badge rounded-pill p-2 ms-2">View all</span>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li className="notification-item">
          <i className="bi bi-exclamation-circle"></i>
          <div>
            <h4>New Order</h4>
            <p>A new order just arived from table #13, A burger....</p>
            <p>30 min. ago</p>
          </div>
        </li>
        <li className="notification-item">
          <i className="bi bi-exclamation-circle"></i>
          <div>
            <h4>New Order</h4>
            <p>A new order just arived from table #13, A burger....</p>
            <p>30 min. ago</p>
          </div>
        </li>
      </ul>
    </li>
  );
}

export default NavNotice;
