import React from "react";
import classes from "./Cart.module.css";

const Cart = (props) => {
  return (
    <div className={classes["cart-container"]}>
      <div>
        <div className={classes["item-container"]}>
          <h3>Noodles</h3>
          <div className={classes["quantity-container"]}>
            <span>150 Rs</span>
            <span>x 1</span>
          </div>
        </div>
        <hr className={classes["horizontal-row"]}></hr>
      </div>
      <div className={classes["amount-container"]}>
        <h2>Total Amount</h2>
        <h2>500 Rs</h2>
      </div>
      <div className={classes["btn-container"]}>
        <button className={classes["close-btn"]}>Close</button>
        <button className={classes["order-btn"]}>Order</button>
      </div>
    </div>
  );
};

export default Cart;
