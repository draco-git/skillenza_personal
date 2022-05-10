import React from 'react';
import './styles.css';
import logo from '../../sources/images/logo.png'
import loginlogo from '../../sources/images/loginicon1.svg'
import { Link } from 'react-router-dom';
export default function Forgot(props) {
  function checkPassword1(){
    var pass=document.getElementById("pass")
        if (pass.value.length<8){
            //alert("no text found in password")
            pass.style.border="2px solid red"
            return false
        }
        pass.style.border="2px solid green"
        return true
}
  function checkEmail1(){
    var email = document.getElementById('txtEmail1');
    var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!filter.test(email.value)) {
    //alert('Please provide a valid email address');
    email.style.border="2px solid red";
    return false;
    }
    email.style.border="2px solid green"
    return true
  }
  function checkform(){
           
    if(checkEmail1() && checkPassword1()){
        alert("validated successfully proceed to login")
    }
    else{
      if(!checkEmail1()){
        alert("email is wrong ")
      }
      if(!checkPassword1()){
        alert("password is wrong")
      }

    }
    

}


  return (
    <div className="signuporlogin" >
    <div className="container">
      <div className='gradientt'>
    <div className="bg-img">
      <img src={loginlogo} className="bg-img-shadow"/>
    </div>
    <div className="content">
        <div id="eleonsignin">
          <center>
          <form>
          <h3>Forgot Password</h3>
          {/* <label for="email">Enter email</label> */}
          <input type="email" name="email" placeholder="Email or Mobile" id="txtEmail1" onInput={checkEmail1}/>
          {/* <label for="password">Enter password</label> */}
          {/* <input type="password" name="password" placeholder="********" id="pass" onInput={checkPassword1}/> */}
         </form>
         <br />
         <button id="signbutton" onClick={checkform}>Continue</button>
        <div id="signin" style={{display:'block'}}> <center>
          <br />
            {/* <a href="#" style={{display:'block'}}>Forgot password?</a> */}
         
        <p>New to WiseCrack? <Link to='/signup'><button className="transback" onClick={()=>props.fn()}>Sign up now</button></Link></p>
        <img
            src={logo}
            width="50%"
          />
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