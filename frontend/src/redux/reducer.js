import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import signupReducer from "./signup/signupReducer";
import loginReducer from "./login/loginReducer";
import activateReducer from "./signup/activateReducer";

// Synchronize state over history -> store-> router -> components
const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    signupUser: signupReducer,
    loginUser: loginReducer,
    activateUser: activateReducer,
  });

export default createRootReducer;