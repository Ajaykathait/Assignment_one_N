import React, { useState } from "react";
import "../signup/indexx.scss";
import { AppDispatcher } from "@redux/";

const Login = () => {

  const [MailId, setMailId] = useState('');
  const [Password, setPassword] = useState('');
  const localData = JSON.parse(localStorage.getItem("user"));

  const logInSubmit = (event) => {
    (localData.some((item) => { return ((MailId == item.Email) && (Password == item.Password)) })) ? (alert("logIn Successful"), AppDispatcher.updateUserTokens()) : (alert('Email or Password is wrong'), event.preventDefault());

  }

  return (
    <div>
      <div className="SignUp-page">
        <form onSubmit={logInSubmit}>

          <div className="title">LogIn Page</div>
          <div className="single-input">
            <label htmlFor="">Email ID</label>
            <input
              type="email"
              placeholder="Email"
              required
              onChange={(event) => {
                setMailId(event.target.value)
              }}
            />
          </div>
          <div className="single-input">
            <label htmlFor="">Password</label>
            <input
              type="password"
              placeholder="Password"
              required
              onChange={(event) => {
                setPassword(event.target.value)
              }}
            />
          </div>

          <button className="btn" type="submit">
            Submit
          </button>
          <p style={{ fontSize: '.95rem', fontWeight: '600', textAlign: 'center', marginTop: '5px' }}>Go to <a href="/auth/signup">SignUp Page</a></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
