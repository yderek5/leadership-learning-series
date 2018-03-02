import React, { Component } from 'react'
import { signOutAction } from '../../_store/actions/auth';
import { connect } from 'react-redux';

class Signout extends Component {

  componentWillMount(){
    this.props.signOutAction();
  }

  render(){
    return(
      <div>
      <h1>You have been logged out</h1>
      </div>
    )
  }
}

export default connect(null, {signOutAction})(Signout);
