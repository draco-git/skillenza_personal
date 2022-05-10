// import React, { useState } from "react";
import Navbar from "../../components/navbar/navbar";
import Login from "../loginandsignup/Login";
import Signup from "../loginandsignup/Signup";
import Forgot from "../loginandsignup/Forgot";
import Home from "../../components/Home/Home";
import { Routes, Route } from "react-router-dom";
import "./Landingpage.css";


export default function Landingpage() {

  return (
    <div className="bg">
      {/* nav bar */}
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot" element={<Forgot />} />
      </Routes>
    </div>
  );
}
