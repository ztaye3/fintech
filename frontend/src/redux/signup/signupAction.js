import {CREATE_USER_SUBMIT, CREATE_USER_SUCCESS, CREATE_USER_ERROR} from "./signupType";
import axios from "axios";
import {toast} from "react-toastify";
import {logger} from "redux-logger/src";
import {BASE_URL, SIGNUP_URL} from "../../utils/Constant";
import {errorFilter} from "../../utils/Utils";

export const signupAction = userInput => {
  return function(dispatch){
      // Dispatch submit action type, set submit state
      dispatch({
          type:CREATE_USER_SUBMIT,
          info: "Submit signup request"});

      // Initiate signup request to backend server
      axios
          .post(BASE_URL + SIGNUP_URL, userInput)
          .then(response => {
              // Display in success toast
              toast.success(
                  "User " + userInput.username+
                  " created successfully!"
              )
              // Dispatch submit success action, set success state
              dispatch({
                  type: CREATE_USER_SUCCESS,
                  info: "User create successfully"
              })
          })

          //If error
          .catch(error => {

              dispatch({
                      type: CREATE_USER_ERROR,
                      info: "Signup process failed",
                      errorData: error.response.data
                  });

              // Display error notification
                errorFilter(error);
          })
  }
}

export default signupAction