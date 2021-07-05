import {CREATE_USER_SUBMIT, CREATE_USER_SUCCESS, CREATE_USER_ERROR} from "./signupType";

const initialState = {
    usernameError: "",
    passwordError: "",
    isSubmitted: false,
    emailError: ""
}

// Signup reducer
const signupReducer = (state = initialState, action) =>{
    switch (action.type){
        case CREATE_USER_SUBMIT:
            return {

                usernameError: "",
                passwordError: "",
                isSubmitted: true,
                emailError: ""
            }
        case CREATE_USER_ERROR:

            if (action.errorData.hasOwnProperty("username")){
                state.usernameError = action.errorData["username"]
            }

             if (action.errorData.hasOwnProperty("password")){
                state.passwordError = action.errorData["password"]
            }

             if (action.errorData.hasOwnProperty("email")){
                state.emailError = action.errorData["email"]
            }
             return {
                 ...state,
                 usernameError: state.usernameError,
                 passwordError: state.passwordError,
                 emailError: state.emailError,
                 isSubmitted: false
            }

        case CREATE_USER_SUCCESS:
            return {
                ...state,
                usernameError: "",
                passwordError: "",
                emailError: "",
                isSubmitted: true
            }
        default:
            return state;
    }
}

export default signupReducer;