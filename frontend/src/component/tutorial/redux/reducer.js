import {SIGN_UP} from "./constAction";

const initialState = {
    username : 10
}
const reducer = (state= initialState, action) => {
    switch (action.type){
        case SIGN_UP:
            return{
                ...state,
                username: state.username - 1
            }
        default: return state
    }
}

export default reducer