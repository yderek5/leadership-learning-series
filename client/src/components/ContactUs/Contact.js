import React from 'react';
import './contact.css';

class Contact extends React.Component {
    state = {
        data: {}
    }

    // The Post logic goes here?

    render() {
        return(
            <div>
                <div class="text-center container">
                <h5>Connecting with you is important to us! We promise to respond within 24 hours
                <br /> during the work week and by the end of business Monday or post-holiday Tuesday.</h5>

                <h5>Email:
                    <a href="">info@leadershiplearningseries.com</a>
                </h5>
            </div>
            <div class="container text-center" id="formArea">
                <h5>Get added to our monthly newsletter featuring new services and resources.</h5>
                <br />
                <form action='/contact' method='POST' id="contact-form">
                    <div class="form-group">
                        <input type="text" class="form-control" id="contactFormName" placeholder="What's Your Name?" />
                    </div>
                    <div class="form-group">
                        <input type="email" class="form-control" id="contactFormEmail" aria-describedby="emailHelp" placeholder="Enter Your Email" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                    <br />
                        <textarea name="message" class="form-control" id="message" rows="3" placeholder="Optional Message"></textarea>
                    </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
        );
    }
}

export default Contact;