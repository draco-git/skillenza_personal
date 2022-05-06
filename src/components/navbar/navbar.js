import React from "react";
import "./navbar.css";
import png from "../../sources/images/logo.png";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
export default function navbar() {
  return (
    <div className="nav-grid-container">
      <div className="nav-logo">
        <Link to="/home">
          <img src={png} className="nav-logo-img" alt="not found" />
        </Link>
      </div>

      <div className="nav-buttons">
        <Link to="/login">
          <button id="nav-login-button" className="button">
            Login
          </button>
        </Link>
        <Link to="/signup">
          <button id="nav-signup-button" className="button">
            Signup
          </button>
        </Link>

        {/* <button id="nav-signup-button">Signup</button> */}
      </div>
    </div>
  );
}
