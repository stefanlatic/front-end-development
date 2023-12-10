import React from 'react';
import './Body.css';
import AllContacts from '../all-contacts/AllContacts';

class Body extends React.Component {
    constructor(props) {
       super(props);
       this.state = {
         inputField1: '',
         inputField2: ''
       };
       this.handleChange = this.handleChange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
    }
   
    handleChange = (event) => {
       this.setState({[event.target.name]: event.target.value});
    }
   
    handleSubmit = (event) => {
       event.preventDefault();
       this.props.handleSubmit(this.state.inputField1, this.state.inputField2);
    }
    
   render() {
    return (
        <div id="app-body">
            <div id="call-items" className="items-container" style={{marginLeft: -(this.props.tab - 1)*100 + '%'}}>
                <div id="call-items-container">
                <input id="input" type="text" name="inputField1" placeholder="Name..." onChange={this.handleChange} onSubmit={this.handleSubmit}/>
                <input id="input" type="number" name="inputField2" placeholder="Number..." onChange={this.handleChange} onSubmit={this.handleSubmit}/>
                <button id="add-btn" onClick={() => this.props.createContact(this.state.inputField1, this.state.inputField2)}>Save</button> 
                 </div>
            </div>

            <div id="contact-items" className="items-container">
                <div id="contact-items-container">
                    <AllContacts contacts={this.props.contacts} onDeleteContact={this.props.onDeleteContact}></AllContacts>
                </div>
            </div>
            </div>
           )
    };
}
   
    export default Body;


    