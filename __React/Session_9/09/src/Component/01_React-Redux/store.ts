import { combineReducers, createStore } from "redux";
import { counterReducer } from "../00_Redux/reducer";
import { cartReducer, taskReducer } from "./reducer";


const rootreducer = combineReducers({
    count : counterReducer,
    task : taskReducer,
    cart : cartReducer
})


const store = createStore(rootreducer)

export {store}