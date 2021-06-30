import React, {Component} from 'react';
import {Container, Navbar, Nav} from "react-bootstrap";
import PropTypes from "prop-types";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import logoutAction from "../../redux/logout/logoutAction";



class Dashboard extends Component {

    onLogoutClick = e => {
      this.props.logoutAction();
    };

    render() {

        const user = this.props.loginUser.user;

        return (
           <div>
                <Navbar bg="light">
                  <Navbar.Brand href="/">Home</Navbar.Brand>
                  <Navbar.Toggle />
                  <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                      User: <b>{user.username}</b>
                    </Navbar.Text>
                    <Nav.Link onClick={this.onLogoutClick}>Logout</Nav.Link>
                  </Navbar.Collapse>
                </Navbar>
        <Container>
          <h1>Dashboard</h1>
        </Container>
      </div>
        );
    }
}

Dashboard.propTypes = {
    logoutAction: PropTypes.func.isRequired,
    loginUser: PropTypes.object.isRequired
};

const mapStateToProps = state => {
    return {
        loginUser: state.loginUser
    }
}

export default connect(mapStateToProps, {logoutAction}) (withRouter(Dashboard));

