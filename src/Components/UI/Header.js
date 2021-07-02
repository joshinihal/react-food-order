import React, { useContext, useEffect, useState } from "react";
import classes from "./Header.module.css";
import CartContext from "../../store/cart-context";

const Header = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const onCartClick = () => {
    props.onCartClick();
  };

  const numberOfCartItems = cartCtx.cartItems.reduce((a, b) => {
    return a + Number(b.amount);
  }, 0);

  const cartClasses = `${classes.cart} ${btnIsHighlighted ? classes.bump : ""}`;

  const { cartItems } = cartCtx;
  useEffect(() => {
    if (cartItems.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    // a cleanup function can returned in useEffect which clears the timer incase component is removed
    return () => {
      clearTimeout(timer);
    };
  }, [cartItems]);

  return (
    <React.Fragment>
      <header className={classes["header-container"]}>
        <div className={classes["header-div"]}>
          <div className={classes["header-title"]}>
            <h2>ReactMeals</h2>
          </div>
          <div onClick={onCartClick} className={cartClasses}>
            <h3>
              Your cart{" "}
              <span className={classes["cart-count"]}>{numberOfCartItems}</span>
            </h3>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
