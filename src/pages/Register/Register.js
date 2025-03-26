import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate(); // Hook to navigate programmatically
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate successful registration
    console.log("User registered:", formData);
    navigate("/Dashboard"); // Redirect to Dashboard
  };

  const registerStyle = {
    backgroundImage: "url('https://mediaassets.cbre.com/cdn/-/media/project/cbre/dotcom/asiapacific/india-emerald/homepage/india-market-outlook-2022-homepage-hero-2736x1824.jpg?iar=0&rev=07678f69c9ac4a13b8dd342dc446dd08&key=homepagehero-default&device=desktop')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "20px",
  };

  const cardStyle = {
    backgroundColor: "white",
    borderRadius: "15px",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
    padding: "40px",
    maxWidth: "400px",
    width: "100%",
  };

  const headingStyle = {
    color: "#343a40",
    marginBottom: "20px",
    fontSize: "24px",
    fontWeight: "bold",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "16px",
  };

  const buttonStyle = {
    backgroundColor: "grey",
    color: "white",
    padding: "12px 25px",
    border: "none",
    borderRadius: "25px",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  return (
    <div style={registerStyle}>
      <div style={cardStyle}>
        <h1 style={headingStyle}>Create Account</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            style={inputStyle}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            style={inputStyle}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email ID"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
            required
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            style={inputStyle}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            style={inputStyle}
            required
          />
          <button type="submit" style={buttonStyle}>
            Regeister
          </button>
        </form>
      </div>
    </div>
  );
}