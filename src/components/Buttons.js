import React from "react";
import classes from './Buttons.module.css';


export const Button = (props) => {
  return (
    <>
      <button className={classes.button}
        type="submit"
        onClick={props.onClick}
      >
        Register
      </button>

      <button
        className={classes.button}
        type="submit"
        onClick={props.onClick}
      >
        Cancel
      </button>

      <button
        className={classes.button}
        type="submit"
        onClick={props.onClick}
      >
        Logout
      </button>
    </>
  );
}

export default Button;
