import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";

import "./cart.css";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart-items">
        {PRODUCTS.map((product) => {
         
          return cartItems[product.id] !== 0 ? <CartItem key={product.id} data={product} /> : null;
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p>Subtotal: ${totalAmount}</p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            Checkout
          </button>
        </div>
      ) : (
        <h1>Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};
