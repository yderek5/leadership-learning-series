import React, { Component } from 'react';

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
import Title from "./TitleBanner";

class HomePage extends Component {

    render() {
        return(
            <div >
                <Header />

                <Switch>
                    <Route exact path='/'>
                    <div className="wrapper">
                    <Title>
                    All Things Career Services
                    </Title>
                    <Home />
                    </div>
                    </Route>

                    <Route exact path='/about'>
                    <div className="wrapper">
                    <Title>
                    About
                    </Title>
                    <About />
                    </div>
                    </Route>

                    <Route path="/services/individual">
                    <div className="wrapper">
                    <Title>
                    Individual Training
                    </Title>
                    <ServicesIndividual />
                    </div>
                    </Route>

                    <Route path="/services/consulting">
                    <div className="wrapper">
                    <Title>
                    Consulting
                    </Title>
                    <ServicesConsulting />
                    </div>
                    </Route>

                    <Route path="/services/training">
                    <div className="wrapper">
                    <Title>
                    Training
                    </Title>
                    <ServicesTraining />
                    </div>
                    </Route>

                    <Route path="/signin">
                    <div className="wrapper">
                    <Title>
                    Log In
                    </Title>
                    <Signin />
                    </div>
                    </Route>

                    <Route path="/signup">
                    <div className="wrapper">
                    <Title>
                    Register
                    </Title>
                    <Signup />
                    </div>
                    </Route>

                    <Route path="/contact">
                    <div className="wrapper">
                    <Title>
                    Contact
                    </Title>
                    <Contact />
                    </div>
                    </Route>

                    <Route path="/signout">
                    <div className="wrapper">
                    <Title>
                    Your Logged Off Thank You!
                    </Title>
                    <Signout />
                    </div>
                    </Route>

                    <Route path="/resources/articles" component = {RequireAuth(ResourcesArticles)} />
                    <Route path="/resources/prep" component = {RequireAuth(ResourcesPrep)} />
                    <Route path="/resources/worksheets" component = {RequireAuth(ResourcesWorksheets)} />

                    
                </Switch>

            </div>
        );
    }
}

export default HomePage;