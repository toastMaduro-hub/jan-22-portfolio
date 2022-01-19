import React from "react";
import './Contact.css'
import ContactInfo from "./ContactInfo";

function Contact() {
    return (
        <div className="contact-container">
            <div className="topper">
                <h1 className="purps">Contact</h1>
            </div>

            {/* Returning each icon with map */}

            {ContactInfo.map((item) => {
                return (
                    <div className="icon-section">
                        <a
                            className="contact-icons"
                            href={item.links}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {item.logo}
                        </a>
                        <div
                            onClick={() => { navigator.clipboard.writeText("Veltsos.Jared@gmail.com") }}
                            className="email"
                        >
                            {item.text}
                        </div>
                    </div>


                )
            })}

        </div>



    );
}

export default Contact;
