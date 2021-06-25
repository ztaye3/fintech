const redux = require("redux")
const createState = redux.createStore
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require("redux-thunk")
const axios = require("axios")

const initialState = {
    isLoading: false,
    users: [],
    error: ''
}

const FETCH_USER_REQUEST = "FETCH_USER_REQUEST"
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS"
const FETCH_USER_ERROR = "FETCH_USER_ERROR"

fetchUserRequest = () => {
    return{
        type: FETCH_USER_REQUEST,
        info: "This is user request"
    }
}

fetchUserSuccess = () => {
    return{
        type: FETCH_USER_SUCCESS,
        info: "This is user success",
        payload: initialState.users
    }
}

fetchUserError = () => {
    return{
        type: FETCH_USER_ERROR,
        info: "This is user error",
        payload: initialState.error
    }
}

reducer = (state=initialState, action) =>{
    switch (action.type){
        case FETCH_USER_REQUEST:
            return{
                ...state,
                isLoading: true
            }
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                users: action.payload
            }
        case FETCH_USER_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
    }
}

//Axios request
const fetchUsers = () => {
    return function(dispatch){
        dispatch(fetchUserRequest())
        axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
            //response.data
            dispatch(fetchUserSuccess(response.data))
        } ).catch(error => {
            //error message
            dispatch(fetchUserError(error.message))
        })
    }
}

const store = createState(reducer, applyMiddleware(thunkMiddleware))