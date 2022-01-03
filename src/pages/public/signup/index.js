import React, { useState } from "react";
import "./indexx.scss";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState([]);
  const [rePassword, setRePassword] = useState([]);

  const userDetails = {
    Name: name,
    Email: email,
    Password: password
  };


  //signUp logic
  const submitForm = (event) => {
    const userDataByEmail = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : {};
    userDataByEmail[email]
      ? (alert("exist"), event.preventDefault())
      : ((userDataByEmail[email] = userDetails),
        alert("You Have Successfully logIn"));

    localStorage.setItem("user", JSON.stringify(userDataByEmail)); //sending data to local storage 
  };

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
              onChange={(event) => {
                setName(event.target.value);
              }}
              required
            />
          </div>
          <div className="single-input">
            <label htmlFor="">Email</label>
            <input
              type="email"
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
                setRePassword(event.target.value);
              }}
              required
            />
          </div>

          <div>
            {password.length <= rePassword.length && password.length != 0 ? (
              password == rePassword
                ? (<p style={{ color: "green" }}>Password is Matched</p>)
                : (<p style={{ color: "red" }}>!! Password doesn&apos;t Match</p>))
              : "...."}
          </div>

          <p style={{ display: "none" }}>
            {name} {email} {password} {rePassword}
          </p>

          <button className="btn" type="submit">
            Submit
          </button>
          <p
            style={{
              fontSize: ".95rem",
              fontWeight: "600",
              textAlign: "center",
              marginTop: "5px"
            }}>
            Go to <a href="/auth/login">LogIn Page</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
