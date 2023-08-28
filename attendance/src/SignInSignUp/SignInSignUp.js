import React, { useEffect, useRef, useState } from "react";
import Home from "./Home";
import SignIn from './SignIn';
import SignUp from './SignUp';
import './SignInSignUp.css';
function SignInSignupWithLocalStorage(){
   const [showHome,setShowHome]=useState(false)
   const [show,setShow]=useState(false)
    const localSignUp=localStorage.getItem("signUp")
    const localEmail=localStorage.getItem("email")
 
    

    useEffect(()=>{
        if(localSignUp){
            setShowHome(true)
        }
        if(localEmail){
            setShow(true)
        }
       })
    return(
        <div>
            {showHome?<Home/>:
            (show?
                <SignIn/>
                :
                <SignUp/>
                )
            }
        </div>
    );
}
export default SignInSignupWithLocalStorage;