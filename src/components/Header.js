import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary ">
      <div className="container-fluid" style={{ backgroundColor: "white" }}>
        <Link className="navbar-brand" to="/">
          <img
            src="https://static.vecteezy.com/system/resources/previews/035/642/255/non_2x/property-dashboard-icon-line-illustration-vector.jpg"
            alt="Logo"
            width="30"
            height="30"
            className="d-inline-block align-text-top me-2"
          />
          <strong>Comp name</strong>
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/Home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/Contact">
                ContactUs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/Login">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/015/271/968/non_2x/business-man-flat-icon-design-human-resource-and-businessman-icon-concept-man-icon-in-trendy-flat-style-symbol-for-your-web-site-design-logo-app-vector.jpg"
                  alt="Logo"
                  width="30"
                  height="30"
                  className="d-inline-block align-text-top me-2"
                />
                Login/Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
