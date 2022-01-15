import React from "react";
import classes from "./Card.module.css";
const Card = (props) => {
  return (
    // props.className is a Card props that we use in AddUser component
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
    // children prop holds all content we pass between opening and closing tag of component
  );
};
export default Card;
