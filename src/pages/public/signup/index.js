import React, { useState, useEffect } from "react";
import "./index.scss";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState([]);
  const [rePass, setRePass] = useState([]);
  const localStorageData = localStorage.getItem("user");
  const [Array, setArray] = useState(
    localStorageData ? JSON.parse(localStorageData) : []
  );

  const userDetails = {
    Name: name,
    Email: email,
    Password: password
  };
  const submitForm = (event) => {
    password == rePass
      ? (setArray([...Array, userDetails]), event.preventDefault())
      : (event.preventDefault(),
        alert("!!! Password Field and Re-Enter Password Field should match"));
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(Array));
  }, [Array]);
  return (
    <div>
      <div className="SignUp-page">
        <form onSubmit={submitForm}>
          <div className="single-input">
            <label htmlFor="">Full Name</label>
            <input
              type="text"
              placeholder="Name"
              onChange={(event) => {
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
              onChange={(event) => {
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
              onChange={(event) => {
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
              onChange={(event) => {
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
        </form>
      </div>
    </div>
  );
};

export default SignUp;
