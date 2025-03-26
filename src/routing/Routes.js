import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import ContactUs from "../pages/ContactUS/ContactUs";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
import Landing from "../pages/Landing/Landing";
import Accesscontrol from "../pages/AccessControl/Accesscontrol";
import Search from "../pages/Search/Search";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<ContactUs />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/" element={<Landing />} />
      <Route path="/AccessControl" element={<Accesscontrol />} />
      <Route path="/Search" element={<Search />} />
    </Routes>
  );
}
