import React, { Component } from 'react';
import Customers from './Customer/customers';
import Header from './universal/header';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Signin from './auth/signin';
import Signout from './auth/signout';
import Signup from './auth/signup';
import Feature from "./feature";
import RequireAuth from './auth/require_auth';

class HomePage extends Component {

    render() {
        return(
            <div >
                <Header />

                <Switch>
                    <Route exact path="/" component = {Customers} />
                    <Route path="/signin" component={Signin} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/signout" component={Signout} />
                    <Route path="/feature" component={RequireAuth(Feature)} />
                </Switch>

            </div>
        );
    }
}

export default HomePage;