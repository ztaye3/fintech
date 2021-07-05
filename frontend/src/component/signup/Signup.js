import React, {Component} from 'react';
import {Button, Col, Container, Form, FormControl, Row} from "react-bootstrap";
import { Link, Redirect } from 'react-router-dom';
import signupAction from "../../redux/signup/signupAction";
import {connect} from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";




class Signup extends Component{
    constructor(props, context) {
        super(props, context);
        this.state = {
            username : "",
            password : "",
            re_password: "",
            email : "",
            first_name : "",
            last_name : "",
            is_moderator : false,
            is_reporter : false,
        }
    }

    onChange = e => {

        this.setState({[e.target.name]: e.target.value})
    }

    onSignupClick = e => {
        e.preventDefault();

       if(this.state.re_password === this.state.password){
            const userInput = {
            username: this.state.username,
            password: this.state.password,
            re_password: this.state.re_password,
            email : this.state.email,
            first_name : this.state.first_name,
            last_name : this.state.last_name,
            is_moderator : this.state.is_moderator === "on",
            is_reporter : this.state.is_reporter === "on",
        }
        this.props.signupAction(userInput);
       }
    }

    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to='/dashboard' />
        }
        else if (this.props.signupUser.isSubmitted) {
            return (
                <div className='container'>
                    <div className='jumbotron mt-5'>
                        <h1 className='display-4'>Welcome to Fact Teller!</h1>
                        <p className='lead'>This is an incredible digital news exchange system with production level
                            features!</p>
                        <hr className='my-4'/>
                        <p>Account activation link sent to {this.state.email}</p>
                        <hr className='my-4'/>
                        <p>Click the Log In button</p>
                        <Link class='btn btn-primary btn-lg' to='/login' role='button'>Login</Link>
                    </div>
                </div>
            )
        }
        else {
            return(
            <Container>
                 <div className='container mt-5'>
                     <Row>
                    <Col md="4">
                        <h1>SignUp</h1>
                        <Form>
                            <Form.Group >
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

                            <Form.Group >
                                <Form.Label>First name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="first_name"
                                    placeholder="Enter first name"
                                    value={this.state.first_name}
                                    onChange={this.onChange}
                                />
                            </Form.Group>

                            <Form.Group >
                                <Form.Label>Last name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="last_name"
                                    placeholder="Enter last name"
                                    value={this.state.last_name}
                                    onChange={this.onChange}
                                />
                            </Form.Group>

                            <Form.Group >
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    placeholder="Enter email"
                                    value={this.state.email}
                                    onChange={this.onChange}
                                    isInvalid={this.props.signupUser.emailError[0]}
                                />
                                <FormControl.Feedback type="invalid"/>
                                {this.props.signupUser.emailError[0]}
                            </Form.Group>

                            <Form.Label>Password</Form.Label>

                            <Form.Group >
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
                           </Form.Group>

                            <Form.Label>Confirm Password</Form.Label>

                            <Form.Group >
                               <Form.Control
                                type="password"
                                name="re_password"
                                placeholder="Confirm user password"
                                value={this.state.re_password}
                                onChange={this.onChange}
                                isInvalid={this.props.signupUser.passwordError[0]}
                            />
                            <FormControl.Feedback type="invalid"/>
                            {this.props.signupUser.passwordError[0]}
                           </Form.Group>

                        <Form.Group >
                            <Form.Check type="checkbox"
                                        label="Moderator"
                                        name="is_moderator"
                                        checked={this.state.is_moderator}
                                        onChange={this.onChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Check type="checkbox"
                                        label="Reporter"
                                        name="is_reporter"
                                        checked={this.state.is_reporter}
                                        onChange={this.onChange}
                            />
                        </Form.Group>

                        </Form>

                        <Button
                            className='btn btn-primary'
                            onClick={this.onSignupClick}>Sign Up</Button>
                        <p className="mt-2">
                            Already have an account ? <Link to="/login">Login</Link>
                        </p>
                    </Col>
                    </Row>
                 </div>

            </Container>
        )
        }
    }
}

Signup.propTypes = {
  signupAction: PropTypes.func.isRequired,
  signupUser: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.any.isRequired

};

const mapStateToProps = state => ({
  signupUser: state.signupUser,
  isAuthenticated: state.loginUser.isAuthenticated
});

export default connect(mapStateToProps, {
  signupAction
})(withRouter(Signup));