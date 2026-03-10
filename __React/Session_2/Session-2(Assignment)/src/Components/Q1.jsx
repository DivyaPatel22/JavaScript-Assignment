// 1. **useState**
    
// Add a new component that has two pieces of state: `name` (string) and `age` (number). Render them and add buttons to increment age and update name from an input.
import { useState } from "react";

function Q1(){
    const [name,setName] = useState("")
    const [age,setAge] = useState(0)

    return (
        <>
        <input type="text" id="name" placeholder={"Enter name"} value={name} onChange={(e)=>setName(e.target.value)} />
        <br/>
        <h1>Name : {name}</h1>
        <h2>Age : {age}</h2>

        <button onClick={()=>setAge(age+1)}>Increment Age</button>
        </>
    )
}

export default Q1