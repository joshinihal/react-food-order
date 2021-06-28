import React, { useContext } from "react";
import reactDom from "react-dom";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

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

  const onOrder = () => {
    props.onOrder();
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
              <CartItem
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                amount={item.amount}
              />
            );
          })}
      </div>

      <div className={classes["amount-container"]}>
        <h2>Total Amount</h2>
        <h2>
          {cartCtx.cartItems.length > 0
            ? cartCtx.cartItems.reduce((a, b) => ({
                price: Number(a.price) + Number(b.price) * Number(b.amount),
              })).price
            : 0}{" "}
          Rs.
        </h2>
      </div>
      <div className={classes["btn-container"]}>
        <button onClick={onCartClose} className={classes["close-btn"]}>
          Close
        </button>
        <button onClick={onOrder} className={classes["order-btn"]}>
          Order
        </button>
      </div>
    </div>
  );
};

const Cart = (props) => {
  const onCartClose = () => {
    props.onCartClose();
  };

  const onOrder = () => {
    props.onOrder();
  };

  return (
    <React.Fragment>
      {reactDom.createPortal(
        <Backdrop onCartClose={onCartClose} />,
        document.getElementById("cart-modal")
      )}
      {reactDom.createPortal(
        <ModalOverlay onOrder={onOrder} onCartClose={onCartClose} />,
        document.getElementById("cart-modal")
      )}
    </React.Fragment>
  );
};

export default Cart;
