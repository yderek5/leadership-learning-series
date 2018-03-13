import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { signUpAction } from '../../_store/actions/auth';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './auth.css';

const renderInput=field=>{
    const {meta: {touched,error}}=field;
    const { input, type, label } = field;
    return(
        <div className="input-field">
            
            <input {...input} type={type} className="form-control" />
            <label for= {type} class ="active">{label}</label>

            
            <div className="error">{touched?error:''}</div>
        </div>
    );
};

class Signup extends Component {
    handleFormSubmit = (formProps) => {
        this.props.signUpAction(formProps);
    }

    renderAlert(){
        console.log(this.props.errorMessage)
        if (this.props.errorMessage){
            return (
            <div className="alert alert-danger">
                <strong>Oops!</strong> {this.props.errorMessage}
            </div>
            )
        }
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
               <fieldset className="form-group">
                    <Field
                    name="name"
                    label="Name:"
                    component={renderInput}
                    type="text"
                    />
                </fieldset>

                <fieldset className="form-group">
                    
                    <Field
                    name="email"
                    label="Email:"
                    component={renderInput}
                    type="email"
                    />
                </fieldset>
  
                <fieldset className="form-group">
                 
                    <Field
                    name="password"
                    label="Password:"
                    component={renderInput}
                    type="password"
                    />
                </fieldset>
                <fieldset className="form-group">
                    
                    <Field
                    name="passwordConfirm"
                    label="Confirm Password:"
                    component={renderInput}
                    type="password"
                    />
                </fieldset>
                {this.renderAlert()}
                <button action="submit" className="btn btn-primary">Sign Up</button>
            </form>
        );
    }
}

function validate(formProps) {
    const errors = {};
  
    if (!formProps.name) {
      errors.name = 'Please enter your name';
    }

    if (!formProps.email) {
      errors.email = 'Please enter an email';
    }
  
    if (!formProps.password) {
      errors.password = 'Please enter a password';
    }
  
    if (!formProps.passwordConfirm) {
      errors.passwordConfirm = 'Please enter a password confirmation';
    }
  
    if (formProps.password !== formProps.passwordConfirm) {
      errors.password = 'Passwords must match';
    }
  
    return errors;
}

function mapStateToProps(state) {
    return { errorMessage: state.auth.error };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      signUpAction: (data) => dispatch(signUpAction(ownProps.history, data))
    }
};

const reduxFormSignup = reduxForm({
    validate,
    form:'signup'
})(Signup);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(reduxFormSignup));