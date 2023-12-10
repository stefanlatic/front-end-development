import React from 'react';
import './Contact.css';



function Contact(props) {
    return (
        <div className="contact-container">
            <div className="contact-item-content">
            <span className="data">{props.contact.inputField1} {props.contact.inputField2}</span> 
            </div>

            <span className="delete-btn" title="delete" onClick={(e) => {
                e.stopPropagation();
                props.onDeleteContact(props.contact);
            }}></span>
        </div>
    );
}

export default Contact;
