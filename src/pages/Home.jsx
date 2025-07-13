import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ViewToggle from "../components/ViewToggle";
import ProductCard from "../components/ProductCard";

import fetchPixabay from "../utils/fetchPixabay";
import "../index.css";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [view, setView] = useState("grid");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [clothingImages, setClothingImages] = useState([]);
  const [backpackImages, setBackpackImages] = useState([]);
  const [techImages, setTechImages] = useState([]);

  useEffect(() => {
    const url =
      selectedCategory === "all"
        ? "https://fakestoreapi.com/products"
        : `https://fakestoreapi.com/products/category/${selectedCategory}`;

    axios.get(url).then((res) => setProducts(res.data));
  }, [selectedCategory]);

  useEffect(() => {
    const loadImages = async () => {
      const clothing = await fetchPixabay("fashion");
      const backpacks = await fetchPixabay("backpack");
      const tech = await fetchPixabay("laptop");

      setClothingImages(clothing.slice(0, 4));
      setBackpackImages(backpacks.slice(0, 4));
      setTechImages(tech.slice(0, 4));
    };

    loadImages();
  }, []);

  const renderCard = (title, images, linkText) => (
    <div
      style={{
        backgroundColor: "#fff",
        padding: "1rem",
        borderRadius: "8px",
        flex: 1,
        minWidth: "300px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        height: "450px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <h3>{title}</h3>
      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt="item"
            style={{
              width: "45%",
              height: "130px",
              objectFit: "cover",
              borderRadius: "6px",
            }}
          />
        ))}
      </div>
      <a
        href="#"
        style={{
          marginTop: "1rem",
          display: "inline-block",
          color: "#0072ff",
          fontWeight: "bold",
        }}
      >
        {linkText}
      </a>
    </div>
  );

  return (
    <>
      <Navbar
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <main
        className="content-column no-sidebar"
        style={{
          background: "linear-gradient(to bottom, #0262ce, #f9f9f9)",
          paddingBottom: "2rem",
        }}
      >
        <HeroSection />

        
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "1rem",
            padding: "2rem",
            flexWrap: "wrap",
          }}
        >
          {renderCard("Top Deals in Clothing", clothingImages, "See all deals")}
          {renderCard("Best in Backpacks", backpackImages, "Explore more")}
          {renderCard("Top Tech Picks", techImages, "See all offers")}
        </div>

        <div className="products-header">
          <h2 style={{ color: "#333" }}>Products</h2>
          <ViewToggle view={view} setView={setView} />
        </div>

        <div className={view === "grid" ? "grid-view" : "list-view"}>
        {products.slice(0, 18).map((product) => (
          <ProductCard key={product.id} product={product} view={view} />
        ))}

        </div>

        <div style={{ padding: "2rem", textAlign: "center" }}>
         
        </div>

       
        <div className="shop-section">
          <div className="box5 box">
          <div className="box-content">
            <h2>Upgrade your office Furniture</h2>
            <div
              className="box-img"
              style={{ backgroundImage: "url('box_5.jpg')" }}
            ></div>
            
          </div>
        </div>

        <div className="box6 box">
          <div className="box-content">
            <h2>Personal Care under $25</h2>
            <div
              className="box-img"
              style={{ backgroundImage: "url('box_6.jpg')" }}
            ></div>
            
          </div>
        </div>

        <div className="box7 box">
          <div className="box-content">
            <h2>Player's paradise starts here</h2>
            <div
              className="box-img"
              style={{ backgroundImage: "url('box_7.jpg')" }}
            ></div>
           
          </div>
        </div>

        <div className="box8 box">
          <div className="box-content">
            <h2>Jobs & Consultings</h2>
            <div
              className="box-img"
              style={{ backgroundImage: "url('box_8.jpg')" }}
            ></div>
            
          </div>
        </div>
        </div>
         <button
          className="backtotop-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Back to Top
        </button>


      </main>
      
    </>
  );
}
