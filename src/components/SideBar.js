import React from "react";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="d-flex flex-column bg-light vh-100 p-3" style={{ width: "250px" }}>
      {/* Navigation Links */}
      <ul className="nav flex-column">
        <li className="nav-item mb-2">
          <button type="button" className="btn btn-outline-secondary w-100"> {/* Added w-100 */}
            <Link to="/Dashboard" className="nav-link text-dark d-flex align-items-center">
              <p className="me-2" /> DashBoard
            </Link>
          </button>
        </li>
        <li className="nav-item mb-2">
          <button type="button" className="btn btn-outline-secondary w-100"> {/* Added w-100 */}
            <Link to="/accesscontrol" className="nav-link text-dark d-flex align-items-center">
              <p className="me-2" /> Access Control
            </Link>
          </button>
        </li>
      </ul>
    </div>
  );
}
