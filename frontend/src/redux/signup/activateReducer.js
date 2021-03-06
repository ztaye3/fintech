import {
    ACTIVATE_SET_ACCOUNT_TYPE,
    ACTIVATE_USER_CHANGE_STATE,
    ACTIVATE_USER_ERROR,
    ACTIVATE_USER_SUCCESS, ACTIVATE_USER_UPDATE_PROFILE_ERROR,
    ACTIVATE_USER_UPDATE_PROFILE_SUCCESS
} from "./signupType";

const initialState = {
    isAccountActivated: false,
    configureAccountType: false,
    uploadProfilePicture: false,
    is_moderator : false,
    is_reporter : false,
}

const activateReducer = (state = initialState, action) =>{
    switch (action.type){
        case ACTIVATE_USER_SUCCESS:
            return {
                configureAccountType: true,
                uploadProfilePicture: false,
                isAccountActivated: true
            }
        case ACTIVATE_USER_ERROR:
            return {
                configureAccountType: false,
                uploadProfilePicture: false,
                isAccountActivated: false
            }
        case ACTIVATE_USER_CHANGE_STATE:
            const swap = state.configureAccountType;
            return {
                ...state,
                configureAccountType: state.uploadProfilePicture,
                uploadProfilePicture: swap,
            }

        case ACTIVATE_SET_ACCOUNT_TYPE:
            return {
                ...state,
                is_moderator: action.payload.is_moderator,
                is_reporter: action.payload.is_reporter,
            }
        case ACTIVATE_USER_UPDATE_PROFILE_SUCCESS:
        case ACTIVATE_USER_UPDATE_PROFILE_ERROR:
        default:
            return state;

    }
}

export default activateReducer;