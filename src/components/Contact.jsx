import React from "react";

function Contact(){
    return(
        <div id="contact-section">
        <h1>CONTACT US</h1>
        <div className="contact-container" id="contact">
            <input type="text" placeholder="Enter First Name"></input>
            <input type="text" placeholder="Enter Last Name"></input>
            <input type="email" placeholder="Enter E-mail"></input>
            <button type="submit">Submit</button>
        </div>
        </div>
    )
}

export default Contact;