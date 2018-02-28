import React from 'react';
import './login.css';

const Login = (props) => {
    return(
        <form onSubmit={this.onSubmit} className="container">
        <h1> Login</h1>
        <div className="form-group"></div>
        <label htmlFor="username">Username:</label>
        <input onChange={this.onChange} id="username" type="text" placeholder="Enter Username" name="username" className="form-control" />
        <div className="form-group"></div>
        <label htmlFor="password">Password:</label>
        <input onChange={this.onChange} id="password" type="password" placeholder="Enter Password" name="password" className="form-control" />
        <div className="form-group"></div>
        <br />
        <button type="submit" className="btn btn-primary">LogIn</button>
        </form>
    )
}

export default Login;