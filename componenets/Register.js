import React from "react";
import classes from "./Register.module.css";

const Register = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h1>CREATE AN ACCOUNT</h1>
        <form>
          <input placeholder="Name"></input>
          <input placeholder="Lastname"></input>
          <input placeholder="Username"></input>
          <input placeholder="Email"></input>
          <input placeholder="Password"></input>
          <input placeholder="Confirm password"></input>
          <span>
            by creating an acount, i consent to the processing of my personal
            datain accordance with the <b>PRIVACY POLICY</b>
          </span>
          <button>CREATE</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
