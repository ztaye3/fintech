import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import signupReducer from "./signup/signupReducer";
import loginReducer from "./login/loginReducer";
import activateReducer from "./signup/activateReducer";
import peopleReducer from "../ReduxTable/peopleSlice";
import reportReducer from "./report/reportReducer";


// Synchronize state over history -> store-> router -> components
const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    signupUser: signupReducer,
    loginUser: loginReducer,
    activateUser: activateReducer,
    report: reportReducer,
      people: peopleReducer,
  });

export default createRootReducer;