import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { signUpAction } from '../../_store/actions/auth';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './auth.css';

const renderInput=field=>{
    const {meta: {touched,error}}=field;
    return(
        <div>
            <input {...field.input} type={field.type} className="form-control" />
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
                    <label>Name:</label>
                    <Field
                    name="name"
                    component={renderInput}
                    type="name"
                    />
                </fieldset>

                <fieldset className="form-group">
                    <label>Email:</label>
                    <Field
                    name="email"
                    component={renderInput}
                    type="email"
                    />
                </fieldset>
                <fieldset className="form-group">
                    <label>Password:</label>
                    <Field
                    name="password"
                    component={renderInput}
                    type="password"
                    />
                </fieldset>
                <fieldset className="form-group">
                    <label>Confirm Password:</label>
                    <Field
                    name="passwordConfirm"
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