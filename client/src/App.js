import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import components
import Navbar from './components/Navbar';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='root'>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
         </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
