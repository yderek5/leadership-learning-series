import React from 'react';
import './contact.css';
import axios from 'axios';

class Contact extends React.Component {
    // set the state equal to what the form will be sending (empty for now)
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }
    // whenver a form field is changed update the state of that target name
    onChange = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state)
    }
    // on submit post to the express route where the email is sent  -- THIS WAS A BITCH TO DO
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
                <div className="text-center container">
                <div className="calendly-inline-widget calendly" data-url="https://calendly.com/allthingscareerconsulting/30min"></div>
               
                <br /> <h5>Not enough time to chat?</h5>
                       <h5>Shoot us an Email!</h5>
            </div>
            <div className="container text-center" id="formArea">
                <form id="contact-form" onSubmit={this.onSubmit} >
                    <div className="form-group">
                        <input onChange={this.onChange} type="text" className="form-control" name="name" placeholder="What's Your Name?" />
                    </div>
                    <div className="form-group">
                        <input onChange={this.onChange} type="email" className="form-control" name="email" aria-describedby="emailHelp" placeholder="Enter Your Email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                    <br />
                        <textarea onChange={this.onChange} className="form-control" name="message" rows="3" placeholder="Optional Message"></textarea>
                    </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                </form>


            </div>
        </div>
        );
    }
}

export default Contact;