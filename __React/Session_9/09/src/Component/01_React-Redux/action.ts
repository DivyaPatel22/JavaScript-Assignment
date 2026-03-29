import type { product } from "../Products/Products"






const increment = () => {
    return {type : "INCREMENT"}
}

const decrement = () => {
    return {type : "DECREMENT"}
}

const add_task = (data : string) => {
    return {
        type : "ADD_TASK",
        payload : data
    }
}

const remove_task = (id: number) => {
    return {type : "REMOVE_TASK",payload : id}
}

const add_to_cart = (p : product) =>{
    return {type : "ADD_TO_CART",payload : p}
}

const remove_to_cart = (id : number) => {
    return {type : "REMOVE_TO_CART",payload : id}
}

const clear_cart = () => {
    return {type : 'CLEAR_CART'}
}

export {increment,decrement,add_task,remove_task,add_to_cart,remove_to_cart,clear_cart}