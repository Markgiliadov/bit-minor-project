import React from "react";
import classes from "./linkButton.module.css";
const LinkButton = (props) => {
  return (
    <div>
      <button className={classes.linkButton} onClick={props.onClick}>
        {props.buttonName}
      </button>
    </div>
  );
};

export default LinkButton;
