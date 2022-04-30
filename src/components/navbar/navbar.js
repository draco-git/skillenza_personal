import React from "react";
import "./navbar.css";

export default function navbar() {
  return (
    <div className="nav-grid-container">
      <div className="nav-logo">
        <i class="fa-solid fa-play">LOGO</i>
      </div>

      <div className="nav-buttons">
        <button id="nav-login-button">Login</button>
        <button id="nav-signup-button">Signup</button>
      </div>
    </div>
  );
}
