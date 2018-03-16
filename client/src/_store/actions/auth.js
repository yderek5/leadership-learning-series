import axios from 'axios';
//import { browserHistory } from 'react-router-dom'; //outdated
import {
    AUTH_USER,
    UNAUTH_USER,
    AUTH_ERROR,
    FETCH_MESSAGE
  } from './constants';

export function signInAction(history, { email, password }) {
    return async (dispatch) => {

        //submit email and password to the server
        axios.post('/users/authenticate', { email, password })
            .then( res => {
                if(res.data.success){
                    // If request is good...
                    // - Update state to indicate user is authenticated
                    dispatch({ type: AUTH_USER });
                    // - Save the JWT token
                    sessionStorage.setItem('token', res.data.token);
                    sessionStorage.setItem('email', email);
                    // - redirect to the route '/feature'
                    history.push('/resources/articles');
                } else {
                    dispatch(authError(res.data.msg));
                }
            })
            .catch( () => {
                // If request is bad...
                // - Show an error to the user
                dispatch(authError('Bad Login Info'));
            });
    };
}

export function signUpAction(history, {  name, email, password }) {
    //same process as signInAction
    return async (dispatch) => {
        axios.post('/users/register', {  name, email, password })
            .then( res => {
                dispatch({ type: AUTH_USER });
                sessionStorage.setItem('token', res.data.token);
                sessionStorage.setItem('email', email);
                history.push('/resources/articles');
            })
            .catch( res => {
                dispatch(authError('Email already registered.'));
            });
    }
}

export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    };
}

export function signOutAction() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('email');
    return { type: UNAUTH_USER };
}

// this function is for fetching info from the express server that requires authentication header

export function fetchMessage(){
    return function(dispatch){
        axios.get('/',{
            headers: { authorization: sessionStorage.getItem('token') }
        })
        .then((response) => {
            dispatch({
                type: FETCH_MESSAGE,
                payload: response.data.message
            })
        })
    }
}