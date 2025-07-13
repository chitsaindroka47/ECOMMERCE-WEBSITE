import React, { useState } from "react";
import Navbar from "../components/Navbar";
export default function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true);
  const toggleForm = () => setIsLogin(!isLogin);

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #007bff, #00c6ff)",
  };

  const boxStyle = {
    background: "white",
    padding: "2rem",
    borderRadius: "10px",
    width: "90%",
    maxWidth: "400px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
  };

  const inputStyle = {
    width: "100%",
    padding: "0.75rem",
    marginBottom: "1rem",
    border: "1px solid #ccc",
    borderRadius: "5px",
  };

  const buttonStyle = {
    width: "100%",
    padding: "0.75rem",
    background: "#007bff",
    color: "white",
    fontWeight: "bold",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginBottom: "1rem",
  };

  const toggleBtnStyle = {
    background: "none",
    color: "#007bff",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    marginLeft: "0.5rem",
  };

  return (
    <>
    <Navbar/>
    <div style={containerStyle}>
      <div style={boxStyle}>
        <h2 style={{ color: "#007bff", marginBottom: "1rem" }}>
          {isLogin ? "Login" : "Sign Up"}
        </h2>
        <form>
          {!isLogin && (
            <input type="text" placeholder="Full Name" style={inputStyle} required />
          )}
          <input type="email" placeholder="Email" style={inputStyle} required />
          <input type="password" placeholder="Password" style={inputStyle} required />
          <button type="submit" style={buttonStyle}>
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <p style={{ fontSize: "0.9rem" }}>
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button type="button" style={toggleBtnStyle} onClick={toggleForm}>
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
    </>
  );
}
