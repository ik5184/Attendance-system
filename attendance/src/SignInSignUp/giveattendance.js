import React, { useRef } from "react";

function Sign() {
    const nae = useRef();

    const handleclk = () => {
        const storedName = localStorage.getItem("name");
        
        if (storedName === nae.current.value) {
            alert("You have already marked the attendance.");
        } else {
            localStorage.setItem("name", nae.current.value);
            document.getElementsByClassName('ms')[0].innerHTML = "Hi " + nae.current.value + ", your attendance has been marked successfully.";
        }
    };

    return (
        <div>
            <div className="container">
                <div className="ms"></div>
                <div className="input_space">
                    <input placeholder="Type your Register Number" type='text' maxLength={15} />
                </div>
                <div className="input_space">
                    <input placeholder="Type your name" ref={nae} type='text' />
                </div>
                <button onClick={handleclk}>Mark the Attendance</button>
            </div>
        </div>
    );
}

export default Sign;