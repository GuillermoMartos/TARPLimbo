import { useState } from "react";
import "./header.css";
import logo from '../logoPNG.png'


function Header() {


    //espacio para funciones de botones Login y Signup:
    function handleLogin(){
        
    }
    function handleSignup(){

    }

  return (
    <div className="header-container">
        <img className="logo" src={logo} alt="logoTARP" />
    <div className="nologo-container">
  
      <div className="header-child">
        Company
      </div>
      <div className="header-child">
      Customers
      </div>
      <div className="header-child">
        Security Audit
      </div>
      <div className="header-child">
        <button className="sign-btn" onClick={()=>handleSignup()}>Sign up</button>
      </div>
      <div className="header-child">
        <button className="log-btn" onClick={()=>handleLogin()}>Log In</button>
      </div>
      </div>
    </div>    
  );
}

export default Header;


