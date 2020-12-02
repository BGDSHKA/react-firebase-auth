import React from "react";

const Login = (props) => {
  return (
    <section>
      <label>
        Email
        <input type="text" autoFocus required value={props.email} onChange={(e) => props.setEmail(e.target.value)}/>
      <p>{props.emailError}</p>
      </label>
      <label>
        Password
        <input type="text" autoFocus required value={props.password} onChange={(e) => props.setPassword(e.target.value)}/>
      </label>
      <p>{props.passwordError}</p>
      {props.hasAccount ? (
          <>
          <button onClick={props.handleLogin}>Login</button>
          <p>Don't have an account? <span onClick={() => props.setHasAccount(!props.hasAccount)}>Registration</span></p>
          </>
      ) : ( 
        <>
        <button onClick={props.handleRegistration}>Register now</button>
        <p>Have an account? <span onClick={() => props.setHasAccount(!props.hasAccount)}>Login</span></p>
        </>
      )}
    </section>
  );
};

export default Login;
