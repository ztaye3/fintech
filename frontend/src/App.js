import React from "react";
import AppBarAndDrawer from "./AppBarAndDrawer/AppBarAndDrawer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SignIn } from "./SignIn";
import { Dashboard } from "./Dashboard/Dashboard";
import { Home } from "./Home/Home";
import { ThemeProvider } from "@material-ui/core/styles";
import { useTheme } from "./theme";
import { DataProvider } from "./Providers/DataProvider";
import People from "./ReduxTable/people";
import Trips from "./Trips/Trips";

import Driver from "./People/Driver";
import Components from "./Components/Components";
import Settings from "./Settings/Settings";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { configureStore } from "@reduxjs/toolkit";
import peopleReducer from "./ReduxTable/peopleSlice";
import { Provider } from "react-redux";

// import Home from "./component/Home";
import Signup from "./component/signup/Signup";
// import Dashboard from "./component/dashboar/Dashboard";
import Login from "./component/login/Login";
import ResetPassword from "./component/login/ResetPassword";
import ResetPasswordConfirm from "./component/login/ResetPasswordConfirm";
import Root from "./redux/Root";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import authentication from "./utils/Authentication";
import {BASE_BACKEND_URL, BASE_FRONTEND_URL} from "./utils/Constant";
import Activate from "./component/signup/Activate";
import Logout from "./component/logout/Logout";

/* Check if server is running in development or production*/
if (window.location.origin === BASE_FRONTEND_URL) {
  axios.defaults.baseURL = BASE_BACKEND_URL; // Development
} else {
  axios.defaults.baseURL = window.location.origin; // Production
}

export default function App() {

  const [currentTheme, setCurrentTheme] = useTheme();
  return (
    <div>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <ThemeProvider theme={currentTheme}>
            <ToastContainer hideProgressBar={true} newestOnTop={true} />
            <DataProvider>
              <Root>
                <div>


                  <Switch>

                    <Route path="/login" component={Login}/>

                    <Route path="/signup" component={Signup}/>

                    <Route exact path='/reset-password' component={ResetPassword} />

                    <Route exact path='/password/reset/confirm/:uid/:token' component={ResetPasswordConfirm} />

                    <Route exact path="/activate/:uid/:token" component={Activate}/>

                    <Route exact strict path="/">
                      <Home />
                    </Route>

                    <AppBarAndDrawer
                    currentTheme={currentTheme}
                    setCurrentTheme={setCurrentTheme}/>
                  </Switch>

                  <Switch>

                    <Route path="/profile">
                      <Driver id={1} />
                    </Route>
                    <Route path="/dashboard" component={authentication(Dashboard)}/>
                    <Route exact path="/logout">
                      <Logout />
                    </Route>
                    <Route exact path="/people" component={authentication(People)}/>

                    <Route path={`/people/:driverId`} component={authentication(Driver)}/>

                    <Route path="/map" component={authentication(Trips)}/>

                    <Route path="/components" component={authentication(Components)}/>

                    <Route path="/settings" component={authentication(Settings)} currentTheme={currentTheme}
                        setCurrentTheme={setCurrentTheme}/>

                  </Switch>
                </div>
              </Root>
            </DataProvider>
        </ThemeProvider>
      </MuiPickersUtilsProvider>
    </div>
  );
}


