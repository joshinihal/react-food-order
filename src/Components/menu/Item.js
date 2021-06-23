import React from "react";
import classes from "./Item.module.css";

const Item = (props) => {
  return (
    <React.Fragment>
      <div className={classes["item-container"]}>
        <div className={classes["item-details"]}>
          <span>
            <b>Noodles</b>
          </span>
          <span>
            <i>Fresh veggies and sauce</i>
          </span>
          <span className={classes["item-price"]}>
            <b>150 Rs.</b>
          </span>
        </div>
        <div className={classes["item-amount-div"]}>
          <span>
            <label htmlFor="quantity">
              <b>Amount</b>
            </label>{" "}
            <input
              type="number"
              id="quantity"
              defaultValue="1"
              className={classes["amount-quantity"]}
            />
          </span>
          <span>
            <button className={classes["add-btn"]}>
              <b>+ Add</b>
            </button>
          </span>
        </div>
      </div>
      <hr className={classes["horizontal-row"]}></hr>
    </React.Fragment>
  );
};

export default Item;
