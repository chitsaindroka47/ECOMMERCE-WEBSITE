import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import axios from "axios";
import "../index.css";

export default function Navbar({ selectedCategory, onCategoryChange }) {
  const cartItems = useSelector((state) => state.cart.items);
  const [showDropdown, setShowDropdown] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/categories").then((res) => {
      setCategories(res.data);
    });
  }, []);

  const handleCategoryChange = (e) => {
    const selected = e.target.value;
    onCategoryChange(selected); 
  };

  return (
    <nav className="navbar enhanced-navbar" style={{ padding: "0.8rem 2rem", display: "flex", alignItems: "center", justifyContent: "space-between", background: "linear-gradient(to right, #0072ff, #00c6ff)", color: "#fff" }}>
   
      <div className="nav-left" style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
        <Link to="/" className="logo" style={{ display: "flex", alignItems: "center" }}>
          <img
            src="/logo.png"
            alt="Logo"
            style={{
              height: "60px",
              width: "auto",
              objectFit: "contain",
              display: "block"
            }}
          />
        </Link>
      </div>

     
      <div className="nav-search-wrap" style={{
        flex: 1,
        maxWidth: "700px",
        margin: "0 2rem",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: "22px",
        overflow: "hidden",
        height: "44px",
        boxShadow: "0 1px 6px rgba(0,0,0,0.15)"
      }}>
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          style={{
            border: "none",
            padding: "0 1rem",
            backgroundColor: "#f3f3f3",
            fontSize: "0.9rem",
            height: "100%",
            borderRight: "1px solid #ccc",
            color: "#222",
            outline: "none",
            cursor: "pointer"
          }}
        >
          <option value="all">All</option>
          {categories.map((cat, idx) => (
            <option key={idx} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>

        <input
          type="text"
          className="search-input"
          placeholder="Search for products, brands and more"
          style={{
            flex: 1,
            border: "none",
            padding: "0 1rem",
            fontSize: "0.95rem",
            height: "100%",
            outline: "none"
          }}
        />

        <button
          style={{
            backgroundColor: "#ffc107",
            border: "none",
            width: "44px",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            borderTopRightRadius: "22px",
            borderBottomRightRadius: "22px"
          }}
        >
          <i className="fas fa-search" style={{ color: "#000" }}></i>
        </button>
      </div>

     
      <div className="nav-right" style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
       
        <div style={{ position: "relative" }}>
          <button
            style={{
              background: "transparent",
              border: "none",
              color: "white",
              fontWeight: "500",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              cursor: "pointer"
            }}
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <img
              src="https://flagcdn.com/w40/in.png"
              alt="IN"
              style={{ width: "20px", height: "14px" }}
            />
            EN <i className="fas fa-chevron-down" style={{ fontSize: "0.7rem" }}></i>
          </button>

          {showDropdown && (
            <div
              style={{
                position: "absolute",
                top: "100%",
                right: 0,
                background: "#fff",
                color: "#222",
                boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                borderRadius: "4px",
                marginTop: "0.5rem",
                zIndex: 1000
              }}
            >
              <div style={{ padding: "0.5rem 1rem", cursor: "pointer" }}>English - EN</div>
              <div style={{ padding: "0.5rem 1rem", cursor: "pointer" }}>हिंदी - HI</div>
              <div style={{ padding: "0.5rem 1rem", cursor: "pointer" }}>தமிழ் - TA</div>
            </div>
          )}
        </div>

        
        <div style={{ color: "white", lineHeight: "1.2", fontWeight: "500", fontSize: "0.9rem", textAlign: "left" }}>
          <div>Returns</div>
          <div style={{ fontWeight: "bold" }}> & Orders</div>
        </div>

       
        <Link to="/LoginSignup" className="nav-btn login-btn" style={{ color: "white", textDecoration: "none", fontWeight: "500" }}>
          Login/SignUp
        </Link>

        
        <Link to="/cart" className="cart-icon" style={{ color: "white", position: "relative" }}>
          <FaShoppingCart size={22} />
          {cartItems.length > 0 && (
            <span className="cart-badge" style={{
              position: "absolute",
              top: "-8px",
              right: "-10px",
              backgroundColor: "red",
              color: "white",
              borderRadius: "50%",
              fontSize: "12px",
              padding: "2px 6px"
            }}>
              {cartItems.length}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}
