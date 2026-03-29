
// import { store } from "../Redux/store"

import { useDispatch, useSelector } from "react-redux"
import type { store } from "../01_React-Redux/store";
import { useState } from "react";
import { add_task, remove_task } from "../01_React-Redux/action";


// export default function ToDo() {

//     const task = store.getState().todo
  
//     return (
//         <div>
//             <p>I'm task Manager</p>
//             <button type="button" onClick={()=>store.dispatch({type:"ADD_TODO",payload:"Let's run"})}>Add Task</button>
//             <button type="button" onClick={()=>store.dispatch({type:"ADD_TODO",payload:"Add a rumor about me"})}>Add Task</button>
//             <button type="button" onClick={()=>store.dispatch({type:"REMOVE_TODO",payload:1})}>Remove task</button>
//             {
//                 task.map(val=>(
//                     <p>{val}</p>
//                 ))
//             }
//         </div>
//     )
// }

type RootState = {
  task : string[]
};

type Dispatch = typeof store.dispatch 


export default function ToDo() {

    const [data,setdata] = useState('')

    const dispatch = useDispatch<Dispatch>()
    const val = useSelector<RootState,string[]>((state : RootState) => state.task)
    // console.log(data);
    // console.log(val);
    
  return (
    <div>
      <p>Task Manager</p>
      <input type="text" value={data} onChange={(e)=>setdata(e.target.value)} /><br /><br />
      <button onClick={()=>dispatch(add_task(data))}>Add Task</button>
      {
        val.map((d,i)=>(
            <div key={d}>
                <p>{d}</p><button onClick={()=>dispatch(remove_task(i))}>Remove</button>
            </div>
        ))
      }
    </div>
  )
}

