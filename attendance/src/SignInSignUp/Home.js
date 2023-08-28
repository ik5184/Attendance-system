import React from "react";
import './SignInSignUp.css';
import Giveattendance from './giveattendance'
       
function Home() {
    const logout = () => {
        localStorage.clear();
        window.location.reload();
    }
    const log = () => {
        localStorage.removeItem('signUp');
        window.location.reload();
    }
    return (
        <div>
           <p>Welcome {localStorage.getItem('name')}</p>
           <button onClick={logout} className="logout">Log Out</button>
           <button onClick={log} className="logout">Go to Sign In</button>
           <Giveattendance/>
        </div>
    );
}

export default Home;