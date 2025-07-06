import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import ViewToggle from "../components/ViewToggle";
import HeroSection from "../components/HeroSection";
import CategorySidebar from "../components/CategorySidebar";
import "../index.css";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [view, setView] = useState("grid");
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    const url =
      selectedCategory === "all"
        ? "https://fakestoreapi.com/products"
        : `https://fakestoreapi.com/products/category/${selectedCategory}`;

    axios.get(url).then((res) => setProducts(res.data));
  }, [selectedCategory]);

  return (
    <div className="homepage-layout">
      <aside className="sidebar-column">
        <CategorySidebar
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </aside>

      <main className="content-column">
        <HeroSection />
        <div className="products-header">
          <h2>Products</h2>
          <ViewToggle view={view} setView={setView} />
        </div>

        <div className={view === "grid" ? "grid-view" : "list-view"}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} view={view} />
          ))}
        </div>
      </main>
    </div>
  );
}
