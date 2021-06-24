import React, {Component} from 'react';
import { Container } from "react-bootstrap";
import {Link} from "react-router-dom";

export class MyComponent extends Component {
    render() {
        return (
            <Container>
                <h1>Home</h1>
                <p>
                    <Link to="/login">Login</Link>
                </p>
                <p>
                    <Link to="/signup">Signup</Link>
                </p>
                <p>
                    <Link to="/dashboard">Dashboard</Link>
                </p>
            </Container>
        );
    }
}

export default MyComponent;
