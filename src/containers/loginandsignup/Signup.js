import React from 'react';
import './styles.css';
import logo from '../../sources/images/logo.png'
import loginlogo from '../../sources/images/loginicon.svg'
export default function Signup(props) {
      function checkEmail() { 
            //alert("entered")
            var email = document.getElementById('txtEmail');
            // var warning=document.getElementById('mailwarning');
            var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!filter.test(email.value)) {
            // warning.textContent="invalid Email"
            // warning.style.color="red"
            email.style.border="2px solid red"
            
            return false;
            }
            // warning.style.color="green"
            // warning.innerHTML="valid Email"
            // setTimeout(() => warning.innerHTML="", 2000);
            
            email.style.border="2px solid green"
            
           return true
        }
        function checkFName() {
            // alert("entered")
            var email = document.getElementById('txtfname');
            // var warning=document.getElementById('fnamewarning');
            var filter = /^[a-zA-Z]{1,}$/;
            if (!filter.test(email.value)) {
            // warning.textContent="invalid firstname"
            // warning.style.color="red"
            email.style.border="2px solid red"
            return false;
            }
            // warning.style.color="green"
            // warning.innerHTML="valid fname"
            // setTimeout(() => warning.innerHTML="", 2000);
            email.style.border="2px solid green"
            
           return true
        }
        function checkLName() {
            //alert("entered")
            var email = document.getElementById('txtlname');
            var warning=document.getElementById('lnamewarning');
            var filter = /^[a-zA-Z]{1,}$/;
            if (!filter.test(email.value)) {
            warning.textContent="invalid lastname"
            warning.style.color="red"
            email.style.border="2px solid red"
            return false;
            }
            warning.style.color="green"
            warning.innerHTML="valid lastname"
            setTimeout(() => warning.innerHTML="", 2000);
            email.style.border="2px solid green"
           return true
        }
        function checkNumber() {
            //alert("entered")
            var email = document.getElementById('txtNum');
            var warning=document.getElementById('numwarning');
            var filter = /^(9|8|7|6)[0-9]{9}$/;
            if (!filter.test(email.value)) {
            warning.textContent="invalid number"
            warning.style.color="red"
            email.style.border="2px solid red"
            return false;
            }
            warning.style.color="green"
            warning.innerHTML="valid number"
            setTimeout(() => warning.innerHTML="", 2000);
            email.style.border="2px solid green"
           return true
        }
        function checkform(){
           
            if (checkEmail() && checkFName() && checkLName() && checkNumber() ){
                alert("succesfully validated")

            }
      }

  return (
    <div className="signuporlogin" >
    <div className="container" style={{height:""}}>
    <div className='gradientt'>
    <div className="bg-img">
      <img src={loginlogo} className="bg-img-shadow"/>
      
    </div>
    <div className="content">
    <div id="eleonsignup">
      <center>
      <form>
        <center>
        <input
          type="email"
          name="email"
          placeholder="Email"
          id="txtEmail"
          onInput={checkEmail}
          //value="mail@mail-domain.com"
        />
        {/* <span id="mailwarning"></span> */}
        <input
          type="text"
          name="first"
          placeholder="your User name here"
          id="txtfname"
          onInput={checkFName}
          //value="firstname"
          title="no special characters and numbers"
        />
        {/* <span id="fnamewarning"></span> */}
        {/* <input
          type="text"
          name="last"
          placeholder="your last name here"
          id="txtlname"
          onInput={checkLName}
          //value="lastname"
        /> */}
        {/* <span id="lnamewarning"></span>
        <input
          type="text"
          name="mobile"
          placeholder="your mobile number"
          id="txtNum"
          onInput={checkNumber}
          //value="910000"
        />
        <span id="numwarning"></span>
        <input type="password" name="password" placeholder="Enter password" />
        <input
          type="password"
          name="cofirmpassword"
          placeholder="confirm password"
        /> */}
        </center>
      </form>
      <br />
      <button id="signbutton" onClick={checkform}>Next
      </button>
      <div id="signup">
        <center>
          <p>
            Already on WiseCrack?
            <button className="transback" onClick={()=>props.fn()}>
              sign in
            </button>
          </p>

          <img
            src={logo}
            width="50%"
            height=""
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