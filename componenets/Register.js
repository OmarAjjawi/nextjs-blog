import React, { useState } from "react";
import classes from "./Register.module.css";
import { useAuth } from '../hooks/auth'
import AuthValidationErrors from './AuthValidationErros'

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([])

  const { register } = useAuth({
    middleware: 'guest',
    redirectIfAuthenticated: '/',
})

  const submitHandler = (e) => {
    e.preventDefault();

    const data = {
      name: name,
      email: email,
      password: password,
      password_confirmation: password_confirmation,
    };

    register({ name, email, password, password_confirmation, setErrors })
  };

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h1>CREATE AN ACCOUNT</h1>
        <AuthValidationErrors errors={errors}/>
        <form method="post" onSubmit={submitHandler}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Username"
          ></input>
          <input
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          ></input>
          <input
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          ></input>
          <input
            value={password_confirmation}
            type="password"
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            placeholder="Confirm password"
          ></input>
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
