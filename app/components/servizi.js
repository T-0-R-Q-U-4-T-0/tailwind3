import React from "react";

const Servizi = ({ title, services = [] }) => {
  return (
    <section style={styles.wrapper}>
      <h2 style={styles.title}>{title}</h2>
      <div style={styles.container}>
        {services.map((service, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.icon}>{service.icon}</div>
            <div style={styles.heading}>{service.heading}</div>
            <div style={styles.link}>{service.link}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  wrapper: {
    padding: "80px 20px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    maxWidth: "1200px",
    margin: "40px auto",
    boxShadow: "0 0 10px rgba(0,0,0,0.05)",
  },
  title: {
    textAlign: "center",
    fontSize: "32px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "40px",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "80px",
    flexWrap: "wrap",
  },
  card: {
    textAlign: "center",
    maxWidth: "280px",
  },
  icon: {
    fontSize: "32px",
    marginBottom: "20px",
  },
  heading: {
    fontWeight: "bold",
    fontSize: "18px",
    marginBottom: "12px",
    color: "#333",
  },
  link: {
    fontSize: "16px",
    color: "#333",
    textDecoration: "underline",
    cursor: "pointer",
  },
};

export default Servizi;
