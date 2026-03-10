// useReducer : add a reducer to your component.

import { useReducer } from "react"

export default function UseReducer() {
    function reducer(state , action){
        if(action.type == "ChangeAge"){
            return {name : state.name , age : state.age + 1}
        }
        else if(action.type == "ChangeName"){
            return {name : action.newName , age : state.age}
        }
    }

    const [detail , dispatch] = useReducer(reducer , {name : "unkown" , age : 0})


  return (
    <div>
        <input type="text" value={detail.name}  onChange={(e)=>{ return dispatch({type : "ChangeName" , newName : e.target.value})}} />
        <button onClick={()=>dispatch({type : "ChangeAge"})}>Increment Age</button>
        <br />
        <h1>Name : {detail.name}</h1>
        <h1>Age : {detail.age}</h1>
    </div>
  )
}
