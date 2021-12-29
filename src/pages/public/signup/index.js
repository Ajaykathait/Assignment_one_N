import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./indexx.scss";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState([]);
  const [rePass, setRePass] = useState([]);
  const localStorageData = JSON.parse(localStorage.getItem("user"));
  const [Array, setArray] = useState(
    localStorageData ? localStorageData : []
  );

  let history = useHistory();

  const userDetails = {
    Name: name,
    Email: email,
    Password: password
  };


  const submitForm = event => {
    // console.log(
    //   arrayOfEmail.find(item => {
    //     console.log(email + "the email");
    //     item == email;
    //   })
    // );
    const localData = JSON.parse(localStorage.getItem("user"));
    let flag = false;
    localData.map(item => {
      return (item.Email === email ? flag = true : console.log("flag"))
    });


    flag ? (alert("This Email Already Used Please Use New Email ID"), event.preventDefault()) :
      // T1
      password == rePass
        ? (setArray([...Array, userDetails]), setArray([...Array, userDetails]),
          alert("!!!Congratulations, The SignUp is Completed"), history.push('/auth/login'))
        : (event.preventDefault(),
          alert("!!! Password Field and Re-Enter Password Field should match"));
    // /T1
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(Array));
  }, [Array]);
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
