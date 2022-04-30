import React from "react";
import classes from "./Login.module.css";

const Login = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h1>Sign In</h1>
        <form>
          <input placeholder="username"></input>
          <input placeholder="password"></input>
          <button>LOGIN</button>
          <a>Forgot my password</a>
          <a>Create a new account</a>
        </form>
      </div>
    </div>
  );
};

export default Login;
