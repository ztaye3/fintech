import React, { Component } from "react";
import {BrowserRouter, HashRouter, Route, Switch} from "react-router-dom";
import Home from "./component/Home";
import Signup from "./component/signup/Signup";
import Dashboard from "./component/dashboar/Dashboard";
import Login from "./component/login/Login";
import Root from "./redux/Root";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import authentication from "./utils/Authentication";
import {BASE_BACKEND_URL, BASE_FRONTEND_URL} from "./utils/Constant";

/* Check if server is running in development or production*/
if (window.location.origin === BASE_FRONTEND_URL) {
  axios.defaults.baseURL = BASE_BACKEND_URL; // Development
} else {
  axios.defaults.baseURL = window.location.origin; // Production
}

class App extends Component {
  render() {
    return (
        <div>
            <Root>
                <ToastContainer hideProgressBar={true} newestOnTop={true} />

                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/signup" component={Signup}/>
                    <Route exact path="/dashboard" component={authentication(Dashboard)}/>
                    <Route exact path="/login" component={Login}/>
                </Switch>
            </Root>
        </div>

    )
  }
}

export default App;