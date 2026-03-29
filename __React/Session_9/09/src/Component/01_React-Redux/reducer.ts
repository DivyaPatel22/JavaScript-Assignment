import type { product } from "../Products/Products"


type actiontype = {
    type : 'INCREMENT'|'DECREMENT'
}

type taskactiontype = {
    type : 'ADD_TASK' | 'REMOVE_TASK',
    payload : string|number
}

type cartactiontype = {
    type : 'ADD_TO_CART'|'REMOVE_TO_CART'|'CLEAR_CART',
    payload : product|number
}

const initialCount = 0
const taskinitial : string[] = [] 
const cartinitial : product[] = []

function countReducer(state = initialCount,action : actiontype){
    switch(action.type){
        case 'INCREMENT':
            return state+1

        case 'DECREMENT':
            return state-1

        default :
            return state
    }
}


function taskReducer(state = taskinitial,action : taskactiontype){
    switch(action.type){
        case 'ADD_TASK':
            return [...state,action.payload]

        case 'REMOVE_TASK':
            return state.filter((_,i)=>i!==action.payload)

        default : 
            return state;
    }
}

function cartReducer(state = cartinitial,action : cartactiontype){
    switch(action.type){
        case 'ADD_TO_CART' :
            return [...state,action.payload]

        case 'REMOVE_TO_CART':
            return state.filter((val)=>val.id!==action.payload)

        case 'CLEAR_CART':
            return cartinitial

        default : 
            return state

    }

}


export {countReducer,taskReducer,cartReducer}