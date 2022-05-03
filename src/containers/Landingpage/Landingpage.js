import React,{useState} from "react";
import Card from "../../components/cards/Card";
import Hero from "../../components/hero/Hero";
import Navbar from "../../components/navbar/navbar";
import Login from "../loginandsignup/Login";
import Signup from "../loginandsignup/Signup";
import "./Landingpage.css";
// import svg from "../../sources/images/codethinking.svg";
// import svg2 from "../../sources/images/Coding _Flatline.svg";
import svg from "../../sources/images/img7.svg";
import { calculateNewValue } from "@testing-library/user-event/dist/utils";

export default function Landingpage() {
    const [page,setPage]=useState("home");
    function handleLogin(){
      setPage("login")

    }
    function handleSignup(){
      setPage("signup")
    }
    function handleHome(){
      setPage("home")

    }

    
    let division;

    if (page==="login"){
      division=<div className="signuporlogin" >
      <Login />
      <br />
      <br /><br /><br /><br /><br /><br /> 
      </div>; 
    }
    if (page==="signup"){
      division=<div className="signuporlogin" >
      <Signup />
      <br />
      <br /><br /><br /><br /><br /><br /> 
      </div>;
    }
    if(page==="home"){
      division=<div style={{height:"100vh"}}>
      <div className="img-container">
        <img  className="imgclass" src={svg} alt="not found" />
      </div>
      
      <Hero />
      

      <div className="card-grid-container">
        <Card title="For developers" btn="Start" />
        <Card title="For trainers" btn="Grade up" />
      </div>
      </div> ;
    }


  return (
    <div className="bg">
    <div className="bg-outer">
      {/* bg container */}
      <div className="bg-container"></div>
      {/* nav bar */}
      <Navbar logfn={handleLogin} signupfn={handleSignup} homefn={handleHome}/>
{/*    <div>
      <div className="img-container">
        <img  className="imgclass" src={svg} alt="not found" />
      </div>
      
      <Hero />
      

      <div className="card-grid-container">
        <Card title="For developers" btn="Start" />
        <Card title="For trainers" btn="Grade up" />
      </div>
      </div> */}
      {/* <div className="signuporlogin" >
      <Login />
      <br />
      <br /><br /><br /><br /><br /><br /> 
      </div> */}
      {division}

    </div>
    </div>
  );
}
