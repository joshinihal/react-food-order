import React, { useContext, useState } from "react";
import reactDom from "react-dom";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import apiBaseUrl from '../../config';

const Backdrop = (props) => {
  const onCartClose = () => {
    props.onCartClose();
  };
  return <div className={classes["backdrop"]} onClick={onCartClose}></div>;
};

const ModalOverlay = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const cartCtx = useContext(CartContext);

  const onCartClose = () => {
    props.onCartClose();
  };

  const onOrder = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    await fetch(
      `${apiBaseUrl}/orders.json`,
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cartCtx.cartItems,
        }),
      }
    );
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCartItems();
  };

  const totalAmount = cartCtx.totalAmount.toFixed(2);

  // jsx is written on multiple lines for readability
  // and is enclosed in parentheses to avoid automatic semicolon insertion of js
  const modalActions = (
    <div className={classes["btn-container"]}>
      <button onClick={onCartClose} className={classes["close-btn"]}>
        Close
      </button>
      <button onClick={onOrder} className={classes["order-btn"]}>
        Order
      </button>
    </div>
  );

  const modalContent = (
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
          {totalAmount}
          Rs.
        </h2>
      </div>
      {isCheckout && (
        <Checkout onConfirm={submitOrderHandler} onCancel={onCartClose} />
      )}
      {!isCheckout && modalActions}
    </div>
  );

  const isSubmittingModalContent = (
    <div className={classes["cart-container"]}>
      <p>Sending order...</p>
    </div>
  );

  const didSubmitModalContent = (
    <div className={classes["cart-container"]}>
      <p>Order Successfull!</p>{" "}
      <div className={classes["btn-container"]}>
        <button onClick={onCartClose} className={classes["close-btn"]}>
          Close
        </button>
      </div>
    </div>
  );

  return (
    <React.Fragment>
      {!isSubmitting && !didSubmit && modalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </React.Fragment>
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
