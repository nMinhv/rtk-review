import React from "react";
import { Link } from "react-router-dom";
function SideBar() {
  return (
    <div className="side-bar">
      <ul>
        <li>
          <Link to="/admin">Dashboard</Link>
        </li>
        <li>
          <Link to={"/admin/cars"}>Cars Manager</Link>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
