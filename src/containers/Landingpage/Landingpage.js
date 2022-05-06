import React, { useState } from "react";
import Card from "../../components/cards/Card";
import Hero from "../../components/hero/Hero";
import Navbar from "../../components/navbar/navbar";
import Login from "../loginandsignup/Login";
import Signup from "../loginandsignup/Signup";
import Forgot from "../loginandsignup/Forgot";
import Home from "../../components/Home/Home";
import { Routes, Route } from "react-router-dom";

import "./Landingpage.css";

import svg from "../../sources/images/img7.svg";
import { calculateNewValue } from "@testing-library/user-event/dist/utils";

export default function Landingpage() {
  const [page, setPage] = useState("home");
  function handleLogin() {
    setPage("login");
  }
  function handleSignup() {
    setPage("signup");
  }
  function handleHome() {
    setPage("home");
  }
  function handleForgot() {
    setPage("forgot");
  }

  //

  return (
    <div className="bg">
      {/* nav bar */}
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}
