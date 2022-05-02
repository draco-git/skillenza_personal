import React from "react";
import "./navbar.css";
import png from "../../sources/images/logo.png";
export default function navbar() {
  return (
    <div className="nav-grid-container">
      <div className="nav-logo" >
        <img src={png} className="nav-logo-img" alt="not found" />
      </div>

      <div className="nav-buttons">
        <button id="nav-login-button">Login</button>
        <button id="nav-signup-button">Signup</button>
      </div>
    </div>
  );
}
