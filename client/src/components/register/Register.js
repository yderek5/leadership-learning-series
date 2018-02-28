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
            profile: ''
        }
    }

    onChange = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state)
    }

    onSubmit = (e) => {
        e.preventDefault();

        const {name, email, username, password, confirmPassword, profile} = this.state;
        console.log(this.state);

        axios.post('http://localhost:3001/users/register', 
        {name, email, username, password, confirmPassword, profile})
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
        <label htmlFor="name">Name:</label>
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
        <label htmlFor="profile">Profile Image:</label>
        <input onChange={this.onChange} id="profile" type="file" name="profile" className="form-control" />
        <br />
        <button type="submit" className="btn btn-primary">Register</button>
        </form>
        );
    }
}

export default Register;