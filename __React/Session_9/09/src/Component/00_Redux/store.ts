import { combineReducers, createStore } from "redux";
import { counterReducer, todoReducer } from "./reducer";

const rootReducer = combineReducers({
    count : counterReducer,
    todo : todoReducer
})


const store = createStore(rootReducer)

export {store}