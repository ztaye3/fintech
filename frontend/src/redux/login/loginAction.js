import {toast} from "react-toastify";
import axios from "axios"
import {SET_CURRENT_USER, SET_TOKEN, UNSET_CURRENT_USER} from "./loginType";
import {setAxiosTokenAuthHeader, errorFilter, isEmptyUtils} from "../../utils/Utils";
import { push } from "connected-react-router";
import {BASE_URL, GET_USER_URL, LOGIN_URL} from "../../utils/Constant";



// Login user
export const loginUserAction = (userInput, redirectTo) =>{
    return function (dispatch){
        axios
            .post(BASE_URL + LOGIN_URL, userInput)
            .then(response => {
                // Display in success toast
              toast.success(
                  "User " + userInput.username+
                  " logged in successfully!"
              )

                const {auth_token} = response.data;

                // Set token header
                setAxiosTokenAuthHeader(auth_token)

                // Set token
                dispatch(setToken(auth_token))

                // Get user details
                dispatch(getCurrentUser(redirectTo))


            } )
            .catch(error => {
                // Unset current user
                dispatch(unsetCurrentUser(error))
            });
    };
}

// Token setter
export const setToken = auth_token =>{
    return function(dispatch){

                // Save token for re use during refresh
                localStorage.setItem("token", auth_token);

                // Set token header
                setAxiosTokenAuthHeader(auth_token)

                // Call set_token action, pass token
                dispatch({
                   type: SET_TOKEN,
                   info: 'Token received',
                   payload: auth_token
                 })
    }
}

// Get user detail after successfully login
export const getCurrentUser = (redirect) => {

    return function (dispatch){
        axios
            .get(BASE_URL + GET_USER_URL)
            .then(response => {

                // Format response
                const {email, username} = response.data
                const user = {
                        username: username,
                        email: email
                    };

                // Set current user
                dispatch(setCurrentUser(user, redirect))
            })
            .catch(error => {
                // Unset current user
                dispatch(unsetCurrentUser(error))
            })
    }
}

// Current user setter
export const setCurrentUser = (user, redirect) => {
    return function (dispatch){

                // Store user in local storage
                localStorage.setItem("user", JSON.stringify(user));
                dispatch({
                    type: SET_CURRENT_USER,
                    info: 'Current user sated',
                    payload: user
                })

                // Redirect to dashboard page
                if (!isEmptyUtils(redirect)) {
                dispatch(push(redirect));
                }
    }
}

// Current user un setter
const unsetCurrentUser = error =>{
    return function(dispatch){
        dispatch({
                    type: UNSET_CURRENT_USER,
                    info: 'Error in login',
                    errorData: error.response.data
                })

                // Unset local storages
                setAxiosTokenAuthHeader("");
                localStorage.removeItem("token");

                // Propagate error
                errorFilter(error)
    }


}

export default loginUserAction;