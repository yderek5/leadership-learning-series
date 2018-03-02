import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

/*
    When the component is mounting or updating (because of changes to props or 
    state) there is an if statement that checks if the user is authenticated.
     If the user is not, HOC will make a redirect into homepage URL. In 
     any other case, nothing happens and the user can go into current component.
*/

let bool = true;

export default function (ComposedComponent) {
    class Authentication extends Component{

        componentWillMount(){
            if(!this.props.authenticated){
                bool=false;
            }
        }
    
        componentWillUpdate(nextProps){
            if(!nextProps.authenticated){
                bool=false;
            }
        }
    
        render(){
            if (bool){
                return <ComposedComponent {...this.props}/>
            }else {
                return <Redirect to='/signin' />
            }
        }
    }

    function mapStateToProps(state) {
        return { authenticated: state.auth.authenticated };
    }

    return connect(mapStateToProps)(Authentication);
    
}
