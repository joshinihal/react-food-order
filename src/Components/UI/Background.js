import React from "react";
import classes from "./Background.module.css";
import mealsImage from "../../assets/pasta.jpg";

const Background = () => {
  return (
    <div className={classes["background-image-conatiner"]}>
      <img
        className={classes["background-image"]}
        alt="pasta"
        src={mealsImage}
      />
    </div>
  );
};

export default Background;
