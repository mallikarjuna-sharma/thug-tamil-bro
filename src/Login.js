import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [userName, setuserName] = useState(null);
  const [password, setpassword] = useState(null);

  const homeNavigate = useNavigate();
  const handleSignIn = function (e) {
    e.preventDefault();
    if (userName === "admin" && password === "admin") {
      homeNavigate("/home/dashboard");
    } else {
      alert("Invalid Credentials");
    }
  };
  return (
    <div
      className="wholelogin"
      style={{ backgroundImage: "url(/loginimages/bg.jpg)" }}
    >
      <img className="bukijpg" src="/loginimages/buki.png"></img>
      <img className="chapng" src="/loginimages/cha-1.png"></img>
      <img
        className="img-fluid loginimage mt-4"
        style={{ width: "400px", height: "180px" }}
        src="/loginimages/logo.jpg"
      ></img>
      <form className="loginform mt-4 ">
        <p className="user h4 py-1">User Login</p>
        <div className="lineuser mt-3"></div>
        <div className="insidelogin d-flex flex-column  ">
          <div className="form-group mt-2">
            <label className="  ms-4  userlabel">User Name *</label>
            <input
              className="w-100 rounded-5 py-2 userinput"
              type="text"
              placeholder="myname"
              value={userName}
              onChange={(e) => setuserName(e.target.value)}
            ></input>
          </div>
          <div className="form-group mt-3">
            <label className="  ms-4 userlabel">Password *</label>
            <input
              className="w-100 rounded-5 py-2 userinput"
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            ></input>
            <button
              onClick={handleSignIn}
              className="btn w-100 rounded-5  text-white py-1  signinbutton"
            >
              SIGN IN
            </button>
          </div>
        </div>
        <div className="d-flex mt-4 pt-3 mx-1 ">
          <Link to="/register" className="userregister  me-2 w-auto mb-  ">
            Not Registered? Sign Up
          </Link>
          <p className="userforgetpassword py-2 w-auto ">Forgot Password?</p>
        </div>
      </form>
      <div className="emptydiv mt-1 "></div>
      <div className="bottomdiv "></div>
    </div>
  );
};

export default Login;
