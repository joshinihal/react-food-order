import React, { useContext } from "react";
import reactDom from "react-dom";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";

const Backdrop = (props) => {
  const onCartClose = () => {
    props.onCartClose();
  };
  return <div className={classes["backdrop"]} onClick={onCartClose}></div>;
};

const ModalOverlay = (props) => {
  const cartCtx = useContext(CartContext);

  const onCartClose = () => {
    props.onCartClose();
  };

  let totalAmount = 0;

  const calculateTotal = (itemsArr) => {
    if (itemsArr.length > 1) {
      cartCtx.cartItems.reduce(
        (accumulator, currentValue) =>
          Number(accumulator) + Number(currentValue.price)
      );
    } else {
      return 0;
    }
  };

  return (
    <div className={classes["cart-container"]}>
      {cartCtx.cartItems.length === 0 && (
        <h3>You have no items in your cart.</h3>
      )}
      <div className={classes["items-list"]}>
        {cartCtx.cartItems.length > 0 &&
          cartCtx.cartItems.map((item) => {
            return (
              <div key={item.id}>
                <div className={classes["item-container"]}>
                  <h3>{item.title}</h3>
                  <div className={classes["quantity-container"]}>
                    <span>{item.price}</span>
                    <span>x {item.amount}</span>
                  </div>
                </div>
                <hr className={classes["horizontal-row"]}></hr>
              </div>
            );
          })}
      </div>

      <div className={classes["amount-container"]}>
        <h2>Total Amount</h2>
        <h2>
          {cartCtx.cartItems.length > 0
            ? cartCtx.cartItems.reduce((a, b) => ({
                price: Number(a.price) + (Number(b.price) * Number(b.amount)),
              })).price
            : 0} Rs.
        </h2>
      </div>
      <div className={classes["btn-container"]}>
        <button onClick={onCartClose} className={classes["close-btn"]}>
          Close
        </button>
        <button className={classes["order-btn"]}>Order</button>
      </div>
    </div>
  );
};

const Cart = (props) => {
  const onCartClose = () => {
    props.onCartClose();
  };

  return (
    <React.Fragment>
      {reactDom.createPortal(
        <Backdrop onCartClose={onCartClose} />,
        document.getElementById("cart-modal")
      )}
      {reactDom.createPortal(
        <ModalOverlay onCartClose={onCartClose} />,
        document.getElementById("cart-modal")
      )}
    </React.Fragment>
  );
};

export default Cart;
