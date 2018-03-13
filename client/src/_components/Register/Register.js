import React from 'react';
import './register.css';
import axios from 'axios';

class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            username: '',
            password: '',
            confirmPassword: '',
            mail: ''
        }
    }

    onChange = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state)
    }

    onSubmit = (e) => {
        e.preventDefault();

        const {name, email, username, password, confirmPassword, mail} = this.state;
        console.log(this.state);

        axios.post('/users/register', 
        {name, email, username, password, confirmPassword, mail})
        .then(res => {
            res.json();
        })
        .catch(err => console.log(err));
    }

    render() {
        return(
        <form onSubmit={this.onSubmit} className="container">
        <h1> Register</h1>
        <p> Please Register using the form below</p>
        <div className="form-group"></div>
        <label htmlFor="name">Name Change:</label>
        <input onChange={this.onChange} id="name" type="text" placeholder="Enter Name" name="name" className="form-control" />
        <div className="form-group"></div>
        <label htmlFor="email">Email:</label>
        <input onChange={this.onChange} id="email" type="email" placeholder="Enter Email" name="email" className="form-control" />
        <div className="form-group"></div>
        <label htmlFor="username">Username:</label>
        <input onChange={this.onChange} id="username" type="text" placeholder="Enter Username" name="username" className="form-control" />
        <div className="form-group"></div>
        <label htmlFor="password">Password:</label>
        <input onChange={this.onChange} id="password" type="password" placeholder="Enter Password" name="password" className="form-control" />
        <div className="form-group"></div>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input onChange={this.onChange} id="confirmPassword" type="password" placeholder="Confirm Password" name="confirmPassword"
            className="form-control" />
        <div className="form-group"></div>
        <input onChange={this.onChange} id="mail" type="radio" name="mail" value="true" />
        <label for="radio1">Please Add me to your Mailing List</label>
        <br />
        <input onChange={this.onChange} id="nomail" type="radio" name="mail" value="false" />
        <label for="radio1">Only important emails please</label>
        <br />
        <button type="submit" className="btn btn-primary">Register</button>
        </form>
        );
    }
}

export default Register;