import axios from "axios";
import {UNSET_CURRENT_USER} from "../login/loginType";
import { push } from "connected-react-router";
import {toast} from "react-toastify";
import { errorFilter } from "../../utils/Utils";
import {BASE_URL, LOGOUT_URL} from "../../utils/Constant";


// Logout action
const logoutAction = () => {
    return function (dispatch){
        axios
            .post(BASE_URL + LOGOUT_URL)
            .then(response => {
                dispatch({
                    type: UNSET_CURRENT_USER,
                    info: 'Logout user'
                })

                // Redirect to home
                dispatch(push("/"));

                // Display Notification
                toast.success("Logout successful.");
            })
            .catch(error => {
                dispatch({
                    type: UNSET_CURRENT_USER,
                    info: 'Logout user'
                })
                errorFilter(error);
            })
    }
}

export default logoutAction;