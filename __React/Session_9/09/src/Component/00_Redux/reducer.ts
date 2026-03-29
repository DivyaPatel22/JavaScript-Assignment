

type actiontype = {
    type : string,
    payload ?: string | number
}

const initialcount = 0

const initialtodo : string[] = []


function counterReducer(state = initialcount, action :actiontype){
    switch(action.type){
        case 'INCREMENT' :
            return state+1
        
        case 'DECREMENT':
            return state-1

        default : 
            return state  
    
    }
}


function todoReducer(state = initialtodo,action:actiontype){
    switch(action.type){
        case 'ADD_TODO' :
            return [...state,action.payload]
        
        case 'REMOVE_TODO' :
            return state.filter((_,i)=>i!=action.payload)

        default :
            return state
    }
}

export {counterReducer,todoReducer}