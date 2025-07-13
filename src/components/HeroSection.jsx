import React from "react";

const HeroSection = () => {
  const heroImage = process.env.PUBLIC_URL + "/hero.jpg";

  return (
    <div
      style={{
        height: "350px",
        width: "100%",
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        position: "relative",
      }}
    >
      
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          background: "linear-gradient(to right, rgba(0, 123, 255, 0.85), rgba(0, 86, 179, 0.65))",
          zIndex: 1,
        }}
      ></div>

      
      <div
        style={{
          position: "relative",
          zIndex: 2,
          color: "white",
          paddingLeft: "3rem",
          maxWidth: "450px",
        }}
      >
        <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>WEEKEND SALE!!</h1>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>50-60% OFF</h2>
        <p style={{ fontSize: "1rem", marginBottom: "1.2rem" }}>
          Explore the latest trends and products curated just for you.
        </p>
        <button
          style={{
            backgroundColor: "#ffc107",
            color: "#000",
            padding: "0.6rem 1.2rem",
            fontWeight: "bold",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
