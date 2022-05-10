import React,{useState} from "react";
import "./styles.css";
import logo from "../../sources/images/logo.png";
import loginlogo from "../../sources/images/loginicon.svg";
import { Link } from "react-router-dom";
export default function Signup(props) {
  const [email,setEmail]=useState("")
  const [name,setName]=useState("")
  const [password,setPassword]=useState("")
  const [next,setNext]=useState("next")
  function handleSignup(){

  }
  function checkEmail() {
    //alert("entered")
    var email = document.getElementById("txtEmail");
    // var warning=document.getElementById('mailwarning');
    var filter =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!filter.test(email.value)) {
      // warning.textContent="invalid Email"
      // warning.style.color="red"
      email.style.border = "2px solid red";

      return false;
    }
    // warning.style.color="green"
    // warning.innerHTML="valid Email"
    // setTimeout(() => warning.innerHTML="", 2000);

    email.style.border = "2px solid green";
    setEmail(email.value)

    return true;
  }
  function checkFName() {
    // alert("entered")
    var email = document.getElementById("txtfname");
    // var warning=document.getElementById('fnamewarning');
    var filter = /^[a-zA-Z]{1,}$/;
    if (!filter.test(email.value)) {
      // warning.textContent="invalid firstname"
      // warning.style.color="red"
      email.style.border = "2px solid red";
      return false;
    }
    // warning.style.color="green"
    // warning.innerHTML="valid fname"
    // setTimeout(() => warning.innerHTML="", 2000);
    email.style.border = "2px solid green";
    setName(email.value)

    return true;
  }
  function checkLName() {
    //alert("entered")
    var email = document.getElementById("txtlname");
    var warning = document.getElementById("lnamewarning");
    var filter = /^[a-zA-Z]{1,}$/;
    if (!filter.test(email.value)) {
      warning.textContent = "invalid lastname";
      warning.style.color = "red";
      email.style.border = "2px solid red";
      return false;
    }
    warning.style.color = "green";
    warning.innerHTML = "valid lastname";
    setTimeout(() => (warning.innerHTML = ""), 2000);
    email.style.border = "2px solid green";
    return true;
  }
  function checkNumber() {
    //alert("entered")
    var email = document.getElementById("txtNum");
    var warning = document.getElementById("numwarning");
    var filter = /^(9|8|7|6)[0-9]{9}$/;
    if (!filter.test(email.value)) {
      warning.textContent = "invalid number";
      warning.style.color = "red";
      email.style.border = "2px solid red";
      return false;
    }
    warning.style.color = "green";
    warning.innerHTML = "valid number";
    setTimeout(() => (warning.innerHTML = ""), 2000);
    email.style.border = "2px solid green";
    return true;
  }
  function checkPassword(){
    var pass = document.getElementById("pass");
    var filter =/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,32}$/;

    if (!filter.test(pass.value)) {
      // warning.textContent="invalid firstname"
      // warning.style.color="red"
      pass.style.border = "2px solid red";
      return false;
    }
    // warning.style.color="green"
    // warning.innerHTML="valid fname"
    // setTimeout(() => warning.innerHTML="", 2000);
    pass.style.border = "2px solid green";
    setPassword("pass.value")

    return true;


  }
  function checkPassword1(){
    var pass1 = document.getElementById("cpass");
    var pass = document.getElementById("pass");
    

    if (pass1.value!==pass.value) {
      // warning.textContent="invalid firstname"
      // warning.style.color="red"
      pass1.style.border = "2px solid red";
      return false;
    }
    // warning.style.color="green"
    // warning.innerHTML="valid fname"
    // setTimeout(() => warning.innerHTML="", 2000);
    pass1.style.border = "2px solid green";

    return true;


  }
  
  function checkform() {
    if (checkEmail() && checkFName()) {
      //alert("succesfully validated proceed to enter password be careful no one watches you");
      
      if (next==="next"){
        var pass1 = document.getElementById("cpass");
        var pass = document.getElementById("pass");

        pass1.style.display='block'
        pass.style.display='block'
        var email = document.getElementById("txtEmail");
        var fname = document.getElementById("txtfname");
        email.style.display='none'
        fname.style.display='none'
        var somebutt = document.getElementById("signbutton");
        somebutt.innerHTML="signup";
        setNext("signup")
      }
      else{
        if (checkPassword1() && checkPassword()){
          handleSignup();
          
  
        }
      }
      
    }
    

  }

  return (
    <div className="signuporlogin">
      <div className="container" style={{ height: "" }}>
        <div className="gradientt">
          <div className="bg-img">
            <img src={loginlogo} className="bg-img-shadow" />
          </div>
          <div className="content">
            <div id="eleonsignup">
              <center>
                <form>
                  <center>
                    <h3>Create Account</h3>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      id="txtEmail"
                      onInput={checkEmail}
                    />
                    <input
                      type="text"
                      name="first"
                      placeholder="your User name here"
                      id="txtfname"
                      onInput={checkFName}
                      //value="firstname"
                      title="no special characters and numbers"
                    />
                    <input 
                    type='password'
                    placeholder='password'
                    id='pass'
                    onInput={checkPassword}
                    style={{display:'none'}}
                    />
                    <input 
                    type='password'
                    placeholder='confirm password'
                    id='cpass'
                    onInput={checkPassword1}
                    style={{display:'none'}}
                    />
                  </center>
                </form>
                <br />
                <button id="signbutton" onClick={checkform}>
                  Next
                </button>
                <div id="signup">
                  <center>
                    <p>
                      Already on WiseCrack?
                      <Link to="/login"><button className="transback">Sign in</button></Link>
                    </p>

                    <img src={logo} width="50%" height="" />
                  </center>
                </div>
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
