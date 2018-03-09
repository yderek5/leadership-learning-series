import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './_store'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Homepage from './_components/homepage';


//   -----  code that checks local storage for a 'user' token. In the case that there is, dispatch an action of type authenticated into reducers
import { AUTH_USER } from './_store/actions/constants';
const token = sessionStorage.getItem('token');
if(token) {
  store.dispatch({ type: AUTH_USER });
} //  ----- end 

class App extends Component {

  render () {
    return (
      <Provider store={ store }>
        <Router history="">
            <Homepage>
              
            </Homepage>
        </Router>
      </Provider>
    )
  }
}

export default App;
