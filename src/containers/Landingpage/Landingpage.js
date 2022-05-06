import React,{useState} from "react";
import Card from "../../components/cards/Card";
import Hero from "../../components/hero/Hero";
import Navbar from "../../components/navbar/navbar";
import Login from "../loginandsignup/Login";
import Signup from "../loginandsignup/Signup";
import Forgot from "../loginandsignup/Forgot";

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
    function handleForgot(){
      setPage('forgot')
    }

    
    let division;

    if (page==="login"){
      division=
                <Login fn={handleSignup} forgotfn={handleForgot}/>; 
    }
    if (page==="signup"){
      division=<Signup fn={handleLogin}/>;
    }
    if(page==="home"){
      division=<div className="anim">
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
    if(page=='forgot'){
      division=<Forgot fn={handleSignup}/>; 
    }


  return (
    <div className="bg">
      {/* nav bar */}
      <Navbar logfn={handleLogin} signupfn={handleSignup} homefn={handleHome}/>
      {/* content */}
      {division}



    </div>
  );
}
