import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-container">
       
        <div className="footer-column">
          <h4>Rapid-Store</h4>
          <p>Your one-stop shop for everything!</p>
        </div>

       
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/products">Products</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Customer Service</h4>
          <ul>
            <li>Contact Us</li>
            <li>Return Policy</li>
            <li>FAQ</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        
        <div className="footer-column">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin-in"></i>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Rapid Store-Made with ❤️ by Chitranjan_singh :).
      </div>
    </footer>
  );
}
