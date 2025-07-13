
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product, view }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAdd = () => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

  return (
    <div className={view === "grid" ? "product-card" : "list-card"}>
      <img src={product.image} alt={product.title} className="product-img" />
      <h3 className="product-title">{product.title}</h3>
      <p className="product-price">${product.price}</p>
      <button className="product-btn" onClick={handleAdd}>
        Add to Cart
      </button>
    </div>
  );
}
