import React, {Component} from 'react';
import {Button, Col, Container, Form, FormControl, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

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
        console.log(this.state.username + " " + this.state.password)
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
                                    required="true"
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

export default Login;