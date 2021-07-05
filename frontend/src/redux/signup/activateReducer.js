import {ACTIVATE_USER_ERROR, ACTIVATE_USER_SUCCESS} from "./signupType";

const initialState = {
    isAccountActivated: false
}
const activateReducer = (state = initialState, action) =>{
    switch (action.type){
        case ACTIVATE_USER_SUCCESS:
            return {
                ...state
            }
        case ACTIVATE_USER_ERROR:
            return {
                ...state
            }
        default:
            return state;

    }
}

export default activateReducer;