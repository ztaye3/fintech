import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Redirect, withRouter} from 'react-router-dom';
import {resetPasswordConfirm} from "../../redux/login/loginAction";
import {connect} from "react-redux";

class ResetPasswordConfirm extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            password: "",
            re_password: "",
        }
    }

    onChange = e => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault();

        const {uid, token} = this.props.match.params;

        const userInput = {
            'uid': uid,
            'token': token,
            'new_password': this.state.password,
            're_new_password': this.state.re_password
            }

        this.props.resetPasswordConfirm(userInput);
    }

    render() {

        return (
            <div className='container mt-5'>
            <form onSubmit={this.onSubmit}>
            <div className='form-group'>
                    <input
                        className='form-control'
                        type='password'
                        placeholder='New Password'
                        name='password'
                        value={this.state.password}
                        onChange={this.onChange}
                        minLength='6'
                        required
                    />
                </div>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='password'
                        placeholder='Confirm New Password'
                        name='re_password'
                        value={this.state.re_password}
                        onChange={ this.onChange}
                        minLength='6'
                        required
                    />
                </div>
                <button className='btn btn-primary' type='submit'>Reset Password</button>
            </form>
        </div>
        );
    }
}

ResetPasswordConfirm.propTypes = {
    resetPasswordConfirm: PropTypes.func.isRequired
};

export default connect(null, {resetPasswordConfirm}) (withRouter(ResetPasswordConfirm));
