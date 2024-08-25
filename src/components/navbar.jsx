import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { ShopContext } from "../context/shop-context";
import "./navbar.css";

export const Navbar = () => {
  const { cartItems } = useContext(ShopContext); 

  
  const totalItemsInCart = Object.values(cartItems).reduce((total, count) => total + count, 0);

  return (
    <div className="navbar">
      <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/product"> Product </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/cart" className="cart-link">
          <ShoppingCart size={32} />
          {totalItemsInCart > 0 && <span className="cart-count">{totalItemsInCart}</span>} 
        </Link>
      </div>
    </div>
  );
};
