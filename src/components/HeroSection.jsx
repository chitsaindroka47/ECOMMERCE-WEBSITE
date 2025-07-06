
import React from "react";
import "../index.css";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-gradient-overlay">
        <div className="hero-content">
          <h1>Shop the Latest Trends</h1>
          <p>Up to 50% off on selected items</p>
          <button className="hero-btn">Explore Now</button>
        </div>
      </div>
    </section>
  );
}
