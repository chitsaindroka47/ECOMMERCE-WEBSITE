import React, { useEffect, useState } from "react";
import axios from "axios";

const categoryIcons = {
  electronics: "🔌",
  jewelery: "💍",
  "men's clothing": "👔",
  "women's clothing": "👗",
};

export default function CategorySidebar({ selectedCategory, onSelectCategory }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/categories")
      .then((res) => setCategories(res.data));
  }, []);

  return (
    <div className="category-sidebar">
      <h3>Filter by Category</h3>
      <ul>
        <li
          onClick={() => onSelectCategory("all")}
          className={selectedCategory === "all" ? "active" : ""}
        >
          🛍️ All Products
        </li>
        {categories.map((cat) => (
          <li
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={selectedCategory === cat ? "active" : ""}
          >
            {categoryIcons[cat] || "📦"} {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </li>
        ))}
      </ul>
    </div>
  );
}
