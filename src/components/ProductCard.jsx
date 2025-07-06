
import React from "react";

export default function ProductCard({ product, view }) {
  return (
    <div className={view === "grid" ? "product-card" : "list-card"}>
      <img src={product.image} alt={product.title} className="product-img" />

      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">${product.price}</p>

        <button className="product-btn">Add to Cart</button>
      </div>
    </div>
  );
}
