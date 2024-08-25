import React from "react";
import { Link } from "react-router-dom";
import "./footbar.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};
