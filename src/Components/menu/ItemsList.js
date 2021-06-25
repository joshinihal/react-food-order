import React from "react";
import classes from "./ItemsList.module.css";
import Item from "./Item";

const ItemsList = (props) => {
  return (
    <div className={classes["list-container"]}>
        {props.menuItems.map(item => {
            return <Item key={item.id} id={item.id} title={item.title} ingredients={item.ingredients} price={item.price} />
        })}
    </div>
  );
};

export default ItemsList;
