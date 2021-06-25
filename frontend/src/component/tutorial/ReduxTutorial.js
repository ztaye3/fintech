const redux =require('redux')
const createStore = redux.createStore
const combine = redux.combineReducers

//Rdux logger

const reduxLogger = require("redux-logger")
const logger = reduxLogger.createLogger()
const applyMiddlware = redux.applyMiddleware()

//Action
const BUY_CAKE = "BUY_CAKE"

const buyCake = () => {
    return{
        type: BUY_CAKE,
        info: "redux action "
    }
}

//Reducer
const initialState = {
    noOfCake: 20
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case BUY_CAKE:
            return{
                ...state,
                noOfCake: state.noOfCake - 1
            }
        default: return {
            state
        }
    }
}

//Store

const rootReducer = combine({
    cake: reducer
})
const store = createStore(rootReducer, applyMiddlware(logger))
console.log("Initial state", store.getState())
const unsubscribe = store.subscribe(() => {})
store.dispatch(buyCake())
unsubscribe()


