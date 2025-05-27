// Navigation.js
import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav style={styles.nav}>
      <ul style={styles.ul}>
        <li style={styles.li}>
          <Link to="/register" style={styles.link}>Customer Registration</Link>
        </li>
        <li style={styles.li}>
          <Link to="/seller-register" style={styles.link}>Seller Registration</Link>
        </li>
        <li style={styles.li}>
          <Link to="/login" style={styles.link}>Login</Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    backgroundColor: "#333",
    padding: "10px",
  },
  ul: {
    display: "flex",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  li: {
    marginRight: "15px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default Navigation;
