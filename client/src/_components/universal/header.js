import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '../../logo.png';

class Header extends Component {

    renderLinks() {
        if(this.props.authenticated) {
        return [
            <li key ="0" className='nav-item'> <Link className="nav-link" to='/signout'>Sign Out </Link></li>,
            <li key ="1" className='nav-item'> <Link className="nav-link" to='/feature'>Personal Watchlist </Link></li>
        ];
        } else {
            return [
                <li key ="0" className='nav-item'><Link className='nav-link' to='/signin'> Sign in </Link></li>,
                <li key ="1" className='nav-item'><Link className="nav-link" to="/signup"> Sign up</Link></li>,
                <li key ="2" className='nav-item'> <Link className="nav-link" to='/feature'>Personal Watchlist </Link></li>
            ];
        }
    }

    render() {
        return(
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
                  <a className="dropdown-item" href="/register">Register</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="/login">Login</a>
                </div>
                </li>
            </ul>
          </div>
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