
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import "../index.css";

export default function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <nav className="navbar enhanced-navbar">
      <div className="nav-left">
        <Link to="/" className="logo">🛒 E-Shop</Link>
      <div className="nav-search-wrap">
        <input
          type="text"
          className="search-input"
          placeholder="Search for products, brands and more"
        />
        <button className="microlens-btn">
          <i className="fas fa-search"></i>
        </button>
      </div>

      </div>

      <div className="nav-right">
        <Link to="/login" className="nav-btn login-btn">Login/SignUp</Link>
        {/* <Link to="/signup" className="nav-btn signup-btn">Sign Up</Link> */}

        <Link to="/cart" className="cart-icon">
          <FaShoppingCart size={22} />
          {cartItems.length > 0 && (
            <span className="cart-badge">{cartItems.length}</span>
          )}
        </Link>
        {/* <FaUserCircle size={22} className="profile-icon" /> */}
      </div>
    </nav>
  );
}
