import React from "react";
import { Link } from "react-router-dom";

function MenusTable({ items }) {
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
          <th scope="col">Description</th>
          <th scope="col">Price</th>
          <th scope="col">Catagory</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        {items &&
          items.length > 0 &&
          items.map((item) => (
            <tr key={item._id}>
              <th scope="row">{item._id}</th>
              <td>{item.name}</td>
              <td>{item.discription}</td>
              <td>{item.price.toFixed(2)} Birr</td>
              <td>{item.catagory}</td>
              <td>
                <Link to={`edit`} className="link-reset">
                  Edit
                </Link>
              </td>
              <td>
                <Link to={`delete`} className="link-reset">
                  Delete
                </Link>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default MenusTable;
