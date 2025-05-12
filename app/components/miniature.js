import React from "react";

const LifestyleClassics = ({ title = "Lifestyle classics", shoes = [] }) => {
  return (
    <section
      style={{ backgroundColor: "#000", padding: "40px 20px", color: "#fff" }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "32px",
          fontWeight: "bold",
          marginBottom: "40px",
        }}
      >
        {title}
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          overflowX: "auto",
        }}
      >
        {shoes.map((shoe, index) => (
          <div
            key={index}
            style={{
              textAlign: "center",
              width: "140px",
              minHeight: "180px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={shoe.image}
              alt={shoe.name}
              style={{
                width: "100px",
                height: "100px",
                objectFit: "contain",
                marginBottom: "10px",
              }}
            />
            <p style={{ fontWeight: "bold" }}>{shoe.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LifestyleClassics;
