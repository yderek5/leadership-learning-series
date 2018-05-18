import React from 'react';
import './contact.css';
import axios from 'axios';

class Contact extends React.Component {
    // set the state as an empty JSON object that the server will recieve on submit
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }
    // whenever a form field is changed update the state of that target name
    onChange = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state)
    }
    // on submit post to the express route where the email is sent
    onSubmit = (e) => {
        e.preventDefault();

        const {name, email, message} = this.state;
        axios.post('/contact/api', {name, email, message})
        .then(res => {
            res.json();
        })
        .catch(err => console.log(err));
    }

    render() {
        return(
            <div>
                <div className="text-center">
                <div className="calendly-inline-widget calendly" data-url="https://calendly.com/allthingscareerconsulting/30min"></div>
                <h4>Not enough time to chat? No problem!</h4>
                <p>Fill out the form below and we will be in contact with you soon.</p>
            </div>
            <div className="container text-center input-field" id="formArea">
                <form id="contact-form" onSubmit={this.onSubmit} >
                    <div className="input-field">
                    <label className ="active left" htmlFor="name">Name:</label>
                        <input onChange={this.onChange} type="text" id ="name" name="name" />
                    </div>
                    <div className="input-field">
                        <label className ="active left" htmlFor="email">Email:</label>
                        <input onChange={this.onChange} type="email" className="form-control" name="email" aria-describedby="emailHelp" />
                        
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="input-field">
                        <label className ="active left" htmlFor="message">Message:</label>
                        <textarea onChange={this.onChange} className="form-control materialize-textarea" name="message" rows="3"></textarea>
                    </div>

                        <button type="submit" className="btn btn-primary waves-effect">Submit</button>
                </form>


            </div>
            <div className="pad"></div>
        </div>
        );
    }
}

export default Contact;