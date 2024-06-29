import React from "react";
import { Link } from "react-router-dom";
function OrdersTable({ items }) {
  const handleStatus = (status) => {
    switch (status) {
      case "Approved":
        return "success";
        break;
      case "Pending":
        return "warning";
        break;
      case "Rejected":
        return "danger";
        break;
      default:
        return "success";
    }
  };

  return (
    <table className="table table-borderless datatable">
      <thead className="table-light">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Meal name</th>
          <th scope="col">Item Count</th>
          <th scope="col">Total Price</th>
          <th scope="col">Transaction</th>
          <th scope="col">Status</th>
          <th scope="col">View</th>
        </tr>
      </thead>
      <tbody>
        {items &&
          items.length > 0 &&
          items.map((item) => (
            <tr key={item._id}>
              <th scope="row">{item._id}</th>
              <td>{item.name}</td>
              <td>{item.count}</td>
              <td>{item.price.toFixed(2)} Birr</td>
              <td>{item.transaction}</td>
              <td>
                <Link to={`edit`} className="link-reset">
                  {item.status}
                </Link>
              </td>
              <td>
                <Link to={`view`} className="link-reset">
                  <i className="bi bi-eye"></i>
                </Link>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default OrdersTable;
