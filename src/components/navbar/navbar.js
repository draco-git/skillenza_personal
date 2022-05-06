import React from "react";
import "./navbar.css";
import png from "../../sources/images/logo.png";
// import {Outlet,Link} from "react-router-dom";
export default function navbar(props) {
  return (
    <div className="navbar">
    <div className="nav-grid-container">
      <div className="nav-logo" >
        <img src={png} className="nav-logo-img" alt="not found" onClick={()=>props.homefn()}/>
      </div>

      <div className="nav-buttons">
        <button id="nav-login-button" onClick={()=>props.logfn()}>Login</button>
        <button id="nav-signup-button" onClick={()=>props.signupfn()}>Signup</button>
      </div>
    </div>
    </div>
  );
}
