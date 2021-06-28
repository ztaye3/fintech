import React, {Component} from 'react';
import {Button, Col, Container, Form, FormControl, Row} from "react-bootstrap";
import {Link, withRouter} from "react-router-dom";
import loginUserAction from "../../redux/login/loginAction";
import {connect} from "react-redux";
import {DASHBOARD_URL} from "../../utils/Constant";
import PropTypes from "prop-types";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:"",
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
            username: this.state.username,
            password: this.state.password
        }

        this.props.loginUserAction(userInput, DASHBOARD_URL)
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col md="4">
                        <h1>Login</h1>
                        <Form >
                            <Form.Group ControlId="usernameId">
                                <Form.Label>User name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="username"
                                    placeholder="Enter user name"
                                    value={this.state.username}
                                    onChange={this.onChange}
                                    isInvalid={this.props.loginUser.usernameError[0]}/>
                                <FormControl.Feedback type="invalid"/>
                                {this.props.loginUser.usernameError[0]}
                            </Form.Group>
                            <Form.Group controlId="passwordId">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    placeholder="Enter user password"
                                    value={this.state.password}
                                    onChange={this.onChange}
                                    isInvalid={this.props.loginUser.passwordError[0]}/>
                                <FormControl.Feedback type="invalid"/>
                            </Form.Group>
                            <FormControl.Feedback type="invalid"/>
                            {this.props.loginUser.passwordError[0]}
                        </Form>
                        <Button
                            color="primary"
                            onClick={this.onLoginClick}>Sign Up</Button>
                        <p className="mt-2">
                            Don't have an account ? <Link to="/signup">Signup</Link>
                        </p>
                    </Col>
                </Row>
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