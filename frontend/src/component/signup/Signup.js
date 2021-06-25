import React, {Component} from 'react';
import {Button, Col, Container, Form, FormControl, Row} from "react-bootstrap";
import {Link} from "react-router-dom";


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
        console.log(this.state.username + " " + this.state.password)
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
                                    onChange={this.onChange}/>
                                <FormControl.Feedback type="invalid"/>
                            </Form.Group>
                            <Form.Group controlId="passwordId">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    placeholder="Enter user password"
                                    value={this.state.password}
                                    onChange={this.onChange}/>
                                <FormControl.Feedback type="invalid"/>
                            </Form.Group>
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

export default Signup;