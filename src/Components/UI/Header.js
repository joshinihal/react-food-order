import React, { useContext } from "react";
import classes from "./Header.module.css";
import CartContext from "../../store/cart-context";

const Header = (props) => {
  const cartCtx = useContext(CartContext);

  const onCartClick = () => {
    props.onCartClick();
  };

  const numberOfCartItems = cartCtx.cartItems.reduce((a, b) => {
    return a + Number(b.amount);
   }, 0);

  return (
    <React.Fragment>
      <header className={classes["header-container"]}>
        <div className={classes["header-div"]}>
          <div className={classes["header-title"]}>
            <h2>ReactMeals</h2>
          </div>
          <div onClick={onCartClick} className={classes["cart"]}>
            <h3>
              Your cart{" "}
              <span className={classes["cart-count"]}>
                  {numberOfCartItems}
              </span>
            </h3>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
