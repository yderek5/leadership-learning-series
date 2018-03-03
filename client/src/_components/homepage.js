import React, { Component } from 'react';
import Customers from './Customer/customers';
import Header from './universal/header';
import Navbar from './Navbar';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Signin from './auth/signin';
import Signout from './auth/signout';
import Signup from './auth/signup';
import Feature from "./feature";
import About from "./About";
import Home from "./Home";
import RequireAuth from './auth/require_auth';
import ServicesIndividual from "./ServicesIndividual";
import ServicesConsulting from "./ServicesConsulting";
import ServicesTraining from "./ServicesTraining";
import ResourcesArticles from "./ResourcesArticles";
import ResourcesPrep from "./ResourcesPrep";
import ResourcesWorksheets from "./ResourcesWorksheets";
import Contact from "./ContactUs";

class HomePage extends Component {

    render() {
        return(
            <div >
                <Header />

                <Switch>

                    <Route exact path="/" component={Home} />
                    <Route path="/customers" component = {Customers} />
                    <Route path="/services/individual" component = {ServicesIndividual} />
                    <Route path="/services/consulting" component = {ServicesConsulting} />
                    <Route path="/services/training" component = {ServicesTraining} />
                    <Route path="/resources/articles" component = {ResourcesArticles} />
                    <Route path="/resources/prep" component = {ResourcesPrep} />
                    <Route path="/resources/worksheets" component = {ResourcesWorksheets} />

                    <Route path="/signin" component={Signin} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/signout" component={Signout} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/feature" component={RequireAuth(Feature)} />
                </Switch>

            </div>
        );
    }
}

export default HomePage;