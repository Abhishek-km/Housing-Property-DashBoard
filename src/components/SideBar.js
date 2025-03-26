import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function SideBar() {
  const [activeButton, setActiveButton] = useState(""); // State to track the active button
  const location = useLocation(); // React Router hook to track the current route

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName); // Update the active button state
  };

  useEffect(() => {
    // Reset active button if the current path is not /AccessControl or /Search or /Dashboard
    if (location.pathname !== "/AccessControl" && location.pathname !== "/Search" && location.pathname !== "/Dashboard") {
      setActiveButton("");
    }
  }, [location]);

  return (
    <div className="d-flex flex-column bg-light vh-100 p-3" style={{ width: "250px" }}>
      {/* Navigation Links */}
      <ul className="nav flex-column">
        <li className="nav-item mb-2">
          <button
            type="button"
            className={`btn w-100 ${activeButton === "Dashboard" ? "btn-secondary" : "btn-outline-secondary"}`}
            onClick={() => handleButtonClick("Dashboard")}
          >
            <Link to="/Dashboard" className="nav-link text-dark d-flex align-items-center">
              <p className="me-2" /> DashBoard
            </Link>
          </button>
        </li>
        <li className="nav-item mb-2">
          <button
            type="button"
            className={`btn w-100 ${activeButton === "AccessControl" ? "btn-secondary" : "btn-outline-secondary"}`}
            onClick={() => handleButtonClick("AccessControl")}
          >
            <Link to="/AccessControl" className="nav-link text-dark d-flex align-items-center">
              <p className="me-2" /> Access Control
            </Link>
          </button>
        </li>
        <li className="nav-item mb-2">
          <button
            type="button"
            className={`btn w-100 ${activeButton === "Search" ? "btn-secondary" : "btn-outline-secondary"}`}
            onClick={() => handleButtonClick("Search")}
          >
            <Link to="/Search" className="nav-link text-dark d-flex align-items-center">
              <p className="me-2" /> Search
            </Link>
          </button>
        </li>
      </ul>
    </div>
  );
}
