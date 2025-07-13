import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, removeFromCart, addToCart } from "../redux/cartSlice";
import CheckoutButton from "../components/CheckoutButton";
import Navbar from "../components/Navbar";
import axios from "axios";

export default function Cart() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const total = items.reduce((sum, item) => sum + item.price, 0);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products?limit=8")
      .then((res) => setSuggestions(res.data));
  }, []);

  return (
    <>
    <Navbar/>
    
    <main style={{ padding: "2rem" }}>
      <h2>Your Cart</h2>

      {items.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {items.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "linear-gradient(to right, #007bff, #ffffff)",
                  padding: "1rem",
                  borderRadius: "8px",
                  width: "100%",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: "100px", height: "100px", objectFit: "contain" }}
                  />
                  <div style={{ maxWidth: "600px" }}>
                    <h4 style={{ marginBottom: "0.3rem" }}>{item.title}</h4>
                    <p style={{ fontSize: "0.9rem", color: "#333" }}>
                      {item.description.slice(0, 90)}...
                    </p>
                    <strong style={{ color: "#222" }}>₹{item.price.toFixed(2)}</strong>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    style={{
                      backgroundColor: "#dc3545",
                      color: "white",
                      padding: "0.5rem 1rem",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <h3 style={{ marginTop: "2rem" }}>Total: ₹{total.toFixed(2)}</h3>

          <div style={{ marginTop: "1rem" }}>
            <CheckoutButton amount={total} />
          </div>

          <button
            onClick={() => dispatch(clearCart())}
            style={{
              marginTop: "1rem",
              backgroundColor: "#ffc107",
              border: "none",
              padding: "0.6rem 1.2rem",
              borderRadius: "6px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Clear Cart
          </button>
        </>
      )}


      <section className="suggestion-section" style={{ marginTop: "3rem" }}>
        <h3>You may also like</h3>
        <div className="suggestion-cards">
          {suggestions.map((product) => (
            <div key={product.id} className="suggestion-card">
              <img src={product.image} alt={product.title} />
              <div className="suggestion-card-title">{product.title.slice(0, 50)}...</div>
              <div className="suggestion-card-price">₹{product.price}</div>
              <button
                className="suggestion-card-btn"
                onClick={() => dispatch(addToCart(product))}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
    </>
  );
}
