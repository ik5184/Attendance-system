
import "./SignInSignUp.css";
import React, { useEffect, useRef, useState } from "react";

function SignIn() {
   const email=useRef()
   const password=useRef()
   
   const localEmail=localStorage.getItem("email")
   const localPassword=localStorage.getItem("password")
   const localName=localStorage.getItem("name")
   const home = () => {
    localStorage.clear();
    window.location.reload();
}
  const handleSignIn=()=>{
    if(email.current.value==localEmail&&password.current.value==localPassword){
        localStorage.setItem("signUp",email.current.value)
        window.location.reload()
    }else{
        alert("Please Enter valid Credential")
    }
  };
  return (
    <div className="container">
      <h1>Hello {localName}</h1>
      <div className="input_space">
        <input placeholder="Email" type="text" ref={email} />
      </div>
      <div className="input_space">
        <input placeholder="Password" type="password" ref={password} />
      </div>
      <button onClick={handleSignIn}>Sign In</button>
      <button onClick={home}>Home Page</button>
    </div>
  );
}

export default SignIn;
