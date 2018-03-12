import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import './header.css';

class Header extends Component {

  state = {
    adminEmail: ""
  };

  componentWillMount() {
    this.setState({adminEmail: sessionStorage.getItem('email')})
};


    renderLinks() {
        if(this.props.authenticated && this.state.adminEmail === "allthingscareerconsulting@gmail.com") {
        return [
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <a className="navbar-brand" href="/"><img className="logo" src={logo} alt="logo" /></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
      
          <div className="collapse navbar-collapse navbar-color" id="navbarSupportedContent">
            <ul className="navbar-nav navbarLinks mx-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">Home
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/admin">Admin</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/news">News Letter</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
                  aria-expanded="false">
                  Services
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="/services/individual">Individual</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="/services/training">Training</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="/services/consulting">Consulting</a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
                  aria-expanded="false">
                  Resources
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="/resources/articles">Articles & Video</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="/resources/worksheets">Training Worksheets</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="/resources/prep">Prep</a>
                </div>
                </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact Us</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
                  aria-expanded="false">
                  Account
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="/purchases">Purchases</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="/signout">Logout</a>
                </div>
                </li>
            </ul>
          </div>
        </nav>

        ];
        } else if (this.props.authenticated && this.state.adminEmail !== "allthingscareerconsulting@gmail.com") {
        return [
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <a className="navbar-brand" href="/"><img className="logo" src={logo} alt="logo" /></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
      
          <div className="collapse navbar-collapse navbar-color" id="navbarSupportedContent">
            <ul className="navbar-nav navbarLinks mx-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">Home
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/news">News Letter</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
                  aria-expanded="false">
                  Services
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="/services/individual">Individual</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="/services/training">Training</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="/services/consulting">Consulting</a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
                  aria-expanded="false">
                  Resources
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="/resources/articles">Articles & Video</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="/resources/worksheets">Training Worksheets</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="/resources/prep">Prep</a>
                </div>
                </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact Us</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
                  aria-expanded="false">
                  Account
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="/purchases">Purchases</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="/signout">Logout</a>
                </div>
                </li>
            </ul>
          </div>
        </nav>

        ];
        } else {
            return [
                <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <a className="navbar-brand" href="/"><img className="logo" src={logo} alt="logo" /></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
      
          <div className="collapse navbar-collapse navbar-color" id="navbarSupportedContent">
            <ul className="navbar-nav navbarLinks mx-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">Home
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/news">News Letter</a>
              </li>
              
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact Us</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
                  aria-expanded="false">
                  Account
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="/signup">Register</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="/signin">Login</a>
                </div>
                </li>
            </ul>
          </div>
        </nav>
            ];
        }
    }

    render() {
        return(
            <nav className="navbar navbar-light">
                <Link to='/' className="navbar-brand"> Mern Authentication </Link>
                <ul className="nav navbar-nav">
                    {this.renderLinks()}
                </ul>
            </nav>
        );
    }
}

function mapStateToProps(state){
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps)(Header);
