import React, {Component} from 'react';
import {Button, Col, Container, Form, FormControl, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import signupAction from "../../redux/signup/signupAction";
import {connect} from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types"; // new import




class Signup extends Component{
    constructor(props, context) {
        super(props, context);
        this.state = {
            username : "",
            password : ""
        }
    }

    onChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSignupClick = e => {
        e.preventDefault();
        const userInput = {
            username: this.state.username,
            password: this.state.password
        }
        this.props.signupAction(userInput);
    }

    render() {
        return(
            <Container>
                <Row>
                    <Col md="4">
                        <h1>SignUp</h1>
                        <Form>
                            <Form.Group ControlId="usernameId">
                                <Form.Label>User name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="username"
                                    placeholder="Enter user name"
                                    value={this.state.username}
                                    onChange={this.onChange}
                                    isInvalid={this.props.signupUser.usernameError[0]}
                                />
                                <FormControl.Feedback type="invalid"/>
                                {this.props.signupUser.usernameError[0]}
                            </Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                placeholder="Enter user password"
                                value={this.state.password}
                                onChange={this.onChange}
                                isInvalid={this.props.signupUser.passwordError[0]}
                            />
                            <FormControl.Feedback type="invalid"/>
                            {this.props.signupUser.passwordError[0]}
                        </Form>
                        <Button
                            color="primary"
                            onClick={this.onSignupClick}>Sign Up</Button>
                        <p className="mt-2">
                            Already have an account ? <Link to="/login">Login</Link>
                        </p>
                    </Col>
                </Row>
            </Container>
        )
    }
}

Signup.propTypes = {
  signupAction: PropTypes.func.isRequired,
  signupUser: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  signupUser: state.signupUser
});

export default connect(mapStateToProps, {
  signupAction
})(withRouter(Signup));