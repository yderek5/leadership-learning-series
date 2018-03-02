import React from 'react';
import './login.css';
import axios from 'axios';

class Login extends React.Component {
	constructor() {
        super();
        this.state = {
            username: '',
            password: '',
        }
    }


    onChange = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state)
    }
    onSubmit = (e) => {
        e.preventDefault();

        const {username, password} = this.state;
        console.log(this.state);

        // axios.post('http://localhost:3001/users/register', 
        // {username, password})
        // .then(res => {
        //     res.json();
        // })
        // .catch(err => console.log(err));
    }

    render() {
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
}
export default Login;