import React, { useState, useEffect } from "react";
import classes from "./Login.module.css";
import { useRouter } from "next/router";
import { useAuth } from "../hooks/auth";
import AuthValidationErrors from './AuthValidationErros'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState(null);

  const router = useRouter();

  useEffect(() => {
    if (router.query.reset?.length > 0 && errors.length === 0) {
      setStatus(atob(router.query.reset));
    } else {
      setStatus(null);
    }
  });

  const { login } = useAuth({
    middleware: "guest",
    redirectIfAuthenticated: "/",
  });

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    login({ email, password, setErrors, setStatus });
  };

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h1>Sign In</h1>
        <form method="post" onSubmit={formSubmitHandler}>
        <AuthValidationErrors errors={errors} />
          <input
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type='email'
          ></input>
          <input
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            value={password}
          ></input>
          <button>LOGIN</button>
          <a>Forgot my password</a>
          <a>Create a new account</a>
        </form>
      </div>
    </div>
  );
};

export default Login;
