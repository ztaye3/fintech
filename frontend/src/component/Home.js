import React, {Component} from 'react';
import { Container } from "react-bootstrap";
import {Link} from "react-router-dom";

export class MyComponent extends Component {
    render() {
        return (
            <Container>
                <div className='container'>
                    <div className='jumbotron mt-5'>
                        <h1 class='display-4'>Home</h1>
                        <p>
                            <Link class='btn btn-primary btn-sm' to="/login">Login</Link>
                        </p>
                        <p>
                            <Link class='btn btn-primary btn-sm' to="/signup">Signup</Link>
                        </p>
                        <p>
                            <Link class='btn btn-primary btn-sm' to="/dashboard">Dashboard</Link>
                        </p>
                    </div>
                </div>
            </Container>
        );
    }
}

export default MyComponent;
