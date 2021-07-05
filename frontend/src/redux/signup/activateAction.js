import axios from "axios";
import {ACTIVATE_ACCOUNT_URL, SIGNUP_URL} from "../../utils/Constant";
import {ACTIVATE_USER_ERROR, ACTIVATE_USER_SUCCESS, CREATE_USER_ERROR, CREATE_USER_SUCCESS} from "./signupType";
import {errorFilter} from "../../utils/Utils";
import {toast} from "react-toastify";
import {push} from "connected-react-router";

const activateAction = userInput => {
    return function (dispatch){

         axios
          .post(ACTIVATE_ACCOUNT_URL, userInput)
          .then(response => {
              // Display in success toast
              toast.success(

                  " Account activated successfully!"
              )
              // Dispatch submit success action, set success state
              dispatch({
                  type: ACTIVATE_USER_SUCCESS,
                  info: "Activated  successfully"
              })

              // Redirect to login
              dispatch(push("/login"));
          })

          //If error
          .catch(error => {

              dispatch({
                      type: ACTIVATE_USER_ERROR,
                      info: "Signup process failed",
                  });

              // Display error notification
                errorFilter(error);
          })
        }


}

export default activateAction;