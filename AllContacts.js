import React from 'react';
import Contact from './../contact/Contact';

function AllContacts(props) {
    return (
        <div>
            {props.contacts.map(function (value, index) {
                return <Contact key={index} contact={value} onDeleteContact={props.onDeleteContact}></Contact>
            })}
        </div>
    );
   
}

export default AllContacts;