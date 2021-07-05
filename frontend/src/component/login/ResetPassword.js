import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {resetPassword} from "../../redux/login/loginAction";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

class ResetPassword extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            email: ""
        }
    }

    onChange = e => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

     onSubmit = e => {
        e.preventDefault()
         this.props.resetPassword(this.state.email);
     }

    render() {

        if(this.props.loginUser.isResetPasswordRequestSent){
            return (
                <div className='container mt-5'>
                    <h1>Reset Password request confirmation sent to  {this.state.email}</h1>
                </div>
            )
        }

        return (
            <div className='container mt-5'>
            <h1>Request Password Reset:</h1>
            <form onSubmit={this.onSubmit}>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='email'
                        placeholder='Email'
                        name='email'
                        value={this.state.email}
                        onChange={this.onChange}
                        required
                    />
                </div>
                <button className='btn btn-primary' type='submit'>Reset Password</button>
            </form>
        </div>
        );
    }
}

ResetPassword.propTypes = {
    resetPassword: PropTypes.func.isRequired,
    loginUser: PropTypes.object.isRequired
};

const mapStateToProps = state => {
    return {
        loginUser: state.loginUser
    }
}

export default connect(mapStateToProps, {resetPassword}) (withRouter(ResetPassword));
