import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const loginStyle = {
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
    marginBottom: "10px",
  };

  const linkStyle = {
    color: "#007bff",
    textDecoration: "none",
    fontSize: "16px",
    cursor: "pointer",
  };

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/Dashboard");
  };

  const handleRegister = () => {
    navigate("/Register");
  };

  return (
    <div style={loginStyle}>
      <div style={cardStyle}>
        <h1 style={headingStyle}>Login</h1>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="UserID" style={inputStyle} />
          <input type="password" placeholder="Password" style={inputStyle} />
          <button type="submit"  style={buttonStyle}>
            Login
          </button>
        </form>
        <p>
          Don't have an account?{" "}
          <span style={linkStyle} onClick={handleRegister}>
            Register here
          </span>
        </p>
      </div>
    </div>
  );
}