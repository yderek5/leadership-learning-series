import React from 'react';
import './register.css';

const Register = (props) => {
    return(
    <form className="container" method="post" action="/users/register" enctype="multipart/form-data">
    <h1> Register</h1>
    <p> Please Register using the form below</p>
    <div class="form-group"></div>
    <label for="name">Name:</label>
    <input id="name" type="text" placeholder="Enter Name" name="name" class="form-control" />
    <div class="form-group"></div>
    <label for="email">Email:</label>
    <input id="email" type="email" placeholder="Enter Email" name="email" class="form-control" />
    <div class="form-group"></div>
    <label for="username">Username:</label>
    <input id="username" type="text" placeholder="Enter Username" name="username" class="form-control" />
    <div class="form-group"></div>
    <label for="password">Password:</label>
    <input id="password" type="password" placeholder="Enter Password" name="password" class="form-control" />
    <div class="form-group"></div>
    <label for="confirmPassword">Confirm Password:</label>
    <input id="confirmPassword" type="password" placeholder="Confirm Password" name="confirmPassword"
        class="form-control" />
    <div class="form-group"></div>
    <label for="profile">Profile Image:</label>
    <input id="profile" type="file" name="profile" class="form-control" />
    <br />
    <button type="submit" class="btn btn-primary">Register</button>
    </form>
    )
}

export default Register;