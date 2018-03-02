import React, { Component } from 'react';
import { Field, reduxForm, Form } from 'redux-form';
import { signInAction } from '../../_store/actions/auth';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const renderInput = field => {
    const { input, type } = field;
    return (
        <div>
            <input {...input} type={type} className="form-control" />
        </div>
    );
}

class Signin extends Component {
    handleFormSubmit ({ email, password }) {
        console.log(email,password); //TODO delete this line after you finish testing
        this.props.signInAction({email, password});
    }

    renderAlert() {
        const { errorMessage } = this.props;
        if ( errorMessage ) {
            return (
                <div className="alert alert-danger">
                    <strong>Oops!</strong>{errorMessage}
                </div>
            );
        }
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <Form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <h1>Sign into Altcoin Charter</h1>
                <div className="form-group">
                    <label>Email:</label>
                    <Field name="email"
                        type="email" component={renderInput} />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <Field name="password"
                        type="password" component={renderInput} />
                </div>
                {this.renderAlert()}
                <button action="submit" className="btn btn-primary">Sign in</button>
            </Form>
        );
    }
}

function mapStateToProps(state) {
    return { 
        errorMessage: state.auth.error
     };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      signInAction: (data) => dispatch(signInAction(ownProps.history, data))
    }
};

const reduxFormSignin = reduxForm({
    form:'signin'
})(Signin);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(reduxFormSignin));