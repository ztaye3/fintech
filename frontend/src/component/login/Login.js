import React, {Component} from 'react';
import {Button, Col, Container, Form, FormControl, Row} from "react-bootstrap";
import {Link, withRouter, Redirect} from "react-router-dom";
import loginUserAction from "../../redux/login/loginAction";
import {connect} from "react-redux";
import {DASHBOARD_URL} from "../../utils/Constant";
import PropTypes from "prop-types";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:"",
            password:""}
    }

    onChange = e => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    onLoginClick = e =>{
        e.preventDefault();
        const userInput = {
            email: this.state.email,
            password: this.state.password
        }

        this.props.loginUserAction(userInput, DASHBOARD_URL)
    }
    render() {
        if (this.props.loginUser.isAuthenticated) {
        return <Redirect to='/dashboard' />
            }
        return (
            <Container>
                <div className='container mt-5'>
                    <Row>
                    <Col md="4">
                        <h1>Login</h1>
                        <Form >
                            <Form.Group ControlId="usernameId">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    placeholder="Enter email"
                                    value={this.state.email}
                                    onChange={this.onChange}
                                    isInvalid={this.props.loginUser.emailError[0]}/>
                                <FormControl.Feedback type="invalid"/>
                                {this.props.loginUser.emailError[0]}
                            </Form.Group>
                            <Form.Group controlId="passwordId">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    placeholder="Enter user password"
                                    value={this.state.password}
                                    onChange={this.onChange}
                                     minLength='6'
                                    isInvalid={this.props.loginUser.passwordError[0]}/>
                                <FormControl.Feedback type="invalid"/>
                            </Form.Group>
                            <FormControl.Feedback type="invalid"/>
                            {this.props.loginUser.passwordError[0]}
                        </Form>

                        <br/>
                            <Button
                            className='btn btn-primary'
                            onClick={this.onLoginClick}>Sign Up</Button>

                        <p className="mt-3">
                            Don't have an account ? <Link to="/signup">Signup</Link>
                        </p>
                        <p className='mt-3'>
                            Forgot your Password? <Link to='/reset-password'>Reset Password</Link>
                        </p>
                    </Col>
                    </Row>
                </div>

            </Container>
        );
    }
}

Login.propTypes = {
  loginUserAction: PropTypes.func.isRequired,
  loginUser: PropTypes.object.isRequired
};

const mapStateToProps = state => {
    return {
        loginUser: state.loginUser
    }
}

export default connect(mapStateToProps, {loginUserAction}) (withRouter(Login));