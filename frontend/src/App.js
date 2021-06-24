import React, { Component } from "react";
import Greet from "./component/tutorial/FunctionalComponent";
import {GreetClass} from "./component/tutorial/FunctionalComponent";
import StateTutorial from "./component/tutorial/StateTutorial";
import {BrowserRouter, HashRouter, Route, Switch} from "react-router-dom";
import Home from "./component/Home";
import Signup from "./component/signup/Signup";
import Dashboard from "./component/dashboar/Dashboard";
import Login from "./component/login/Login";
import {Provider} from "react-redux";
import {store} from "./component/tutorial/redux/store";
import Container from "./component/tutorial/redux/Container";
import Root from "./redux/Root";


class App extends Component {
  render() {
    return (
        <div>
            <Root>
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