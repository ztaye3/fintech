import {CREATE_USER_SUBMIT, CREATE_USER_SUCCESS, CREATE_USER_ERROR} from "./signupType";

const initialState = {
    usernameError: "",
    passwordError: "",
    isSummited: false
}

// Signup reducer
const signupReducer = (state = initialState, action) =>{
    switch (action.type){
        case CREATE_USER_SUBMIT:
            return {

                usernameError: "",
                passwordError: "",
                isSubmitted: true
            }
        case CREATE_USER_ERROR:

            if (action.errorData.hasOwnProperty("username")){
                state.usernameError = action.errorData["username"]
            }

             if (action.errorData.hasOwnProperty("password")){
                state.passwordError = action.errorData["password"]
            }
             return {
                 ...state,
                 usernameError: state.usernameError,
                 passwordError: state.passwordError,
                 isSubmitted: false
            }

        case CREATE_USER_SUCCESS:
            return {
                ...state,
                usernameError: "",
                passwordError: "",
                isSubmitted: true
            }
        default:
            return state;
    }
}

export default signupReducer;