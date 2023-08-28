
import "./SignInSignUp.css";
import React, {  useRef} from "react";
function SignUp() {
    const name=useRef()
   const email=useRef()
   const password=useRef()
  
 
   const handleClick=()=>{
    if(name.current.value&&email.current.value&&password.current.value)
   {
     localStorage.setItem("name",name.current.value)
     localStorage.setItem("email",email.current.value)
     localStorage.setItem("password",password.current.value)
     localStorage.setItem("signUp",email.current.value)
     alert("Account created successfully!!")
     
     window.location.reload()
   }
}
  return (
    <div className="container">
                    <h2> Welcome To all In SRM Institute</h2>
                        <div className="input_space">
                            <input placeholder="Name" type='text' ref={name} />
                        </div>
                        <div className="input_space">
                            <input placeholder="Email" type='text' ref={email} />
                        </div>
                        <div className="input_space">
                            <input placeholder="Password" type='password' ref={password} />
                        </div>
                        <button onClick={handleClick}>Sign Up</button>
                </div>
  );
}

export default SignUp;