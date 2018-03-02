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
      //  try {
      //  const res = await axios.post('/users/authenticate', { email, password });
        //submit email and password to the server
        axios.post('/users/authenticate', { email, password })
            .then( res => {
                if(res.data.success){
                    // If request is good...
                    // - Update state to indicate user is authenticated
                    dispatch({ type: AUTH_USER });
                    // - Save the JWT token
                    localStorage.setItem('token', res.data.token);
                    // - redirect to the route '/feature'
                    history.push('/feature');
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

export function signUpAction(history, { email, password }) {
    //same process as signInAction
    return async (dispatch) => {
        axios.post('/users/register', { email,password })
            .then( res => {
                dispatch({ type: AUTH_USER });
                localStorage.setItem('token', res.data.token);
                history.push('/feature');
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
    localStorage.removeItem('token');
    return { type: UNAUTH_USER };
}

// this function is for fetching info from the express server that requires authentication header
//TODO: revise later with user profile info
export function fetchMessage(){
    return function(dispatch){
        axios.get('/',{
            headers: { authorization: localStorage.getItem('token') }
        })
        .then((response) => {
            dispatch({
                type: FETCH_MESSAGE,
                payload: response.data.message
            })
        })
    }
}