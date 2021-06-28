import React, { Component } from "react";
import {BrowserRouter, HashRouter, Route, Switch} from "react-router-dom";
import Home from "./component/Home";
import Signup from "./component/signup/Signup";
import Dashboard from "./component/dashboar/Dashboard";
import Login from "./component/login/Login";
import Root from "./redux/Root";
import { ToastContainer } from "react-toastify";
import axios from "axios";
axios.defaults.baseURL = "http://127.0.0.1:8000";



class App extends Component {
  render() {
    return (
        <div>
            <Root>
                <ToastContainer hideProgressBar={true} newestOnTop={true} />

                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/signup" component={Signup}/>
                    <Route exact path="/dashboard" component={Dashboard}/>
                    <Route exact path="/login" component={Login}/>
                </Switch>
            </Root>
        </div>

    )
  }
}

export default App;