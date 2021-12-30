import React, { useState } from "react";
import "./indexx.scss";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState([]);
  const [rePass, setRePass] = useState([]);


  const userDetails = {
    Name: name,
    Email: email,
    Password: password
  };


  const submitForm = (event) => {
    const userDataByEmail = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {}
    userDataByEmail[email] ? (alert('exist'), event.preventDefault()) : userDataByEmail[email] = userDetails

    localStorage.setItem('user', JSON.stringify(userDataByEmail));
  }


  return (
    <div>
      <div className="SignUp-page">
        <form onSubmit={submitForm}>

          <div className="title">SignUp Page</div>
          <div className="single-input">
            <label htmlFor="">Full Name</label>
            <input
              type="text"
              placeholder="Name"
              onChange={event => {
                setName(event.target.value);
              }}
              required
            />
          </div>
          <div className="single-input">
            <label htmlFor="">Email</label>
            <input
              type="mail"
              placeholder="Email"
              onChange={event => {
                setEmail(event.target.value);
              }}
              required
            />
          </div>
          <div className="single-input">
            <label htmlFor="">Password</label>
            <input
              type="password"
              placeholder="Password"
              onChange={event => {
                setPassword(event.target.value);
              }}
              required
            />
          </div>
          <div className="single-input">
            <label htmlFor="">Re-Enter Password</label>
            <input
              type="password"
              placeholder="Re-Enter Password"
              onChange={event => {
                setRePass(event.target.value);
              }}
              required
            />
          </div>

          <div>
            {password.length <= rePass.length && password.length != 0 ? (
              password == rePass ? (
                <p style={{ color: "green" }}>Password is Matched</p>
              ) : (
                <p style={{ color: "red" }}>!! Password doesn&apos;t Match</p>
              )
            ) : null}
          </div>

          <p style={{ display: "none" }}>
            {name} {email} {password} {rePass}
          </p>

          <button className="btn" type="submit">
            Submit
          </button>
          <p style={{ fontSize: '.95rem', fontWeight: '600', textAlign: 'center', marginTop: '5px' }}>Go to <a href="/auth/login">LogIn Page</a></p>

        </form>
      </div>
    </div>
  );
};

export default SignUp;
