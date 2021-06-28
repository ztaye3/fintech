import  {SET_TOKEN, SET_CURRENT_USER, UNSET_CURRENT_USER} from "./loginType";

const initialState = {
    user: {},
    token: "",
    isAuthenticated: false,
    usernameError: "",
    passwordError: "",
}

const loginReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_TOKEN:
            return  {
                ...state,
                isAuthenticated: true,
                token: action.payload
            }
        case SET_CURRENT_USER:
            return {
                ...state,
                user: action.payload
            }
        case UNSET_CURRENT_USER:

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
                 isAuthenticated: false
            }
        default:
            return state;
    }
}

export default loginReducer;