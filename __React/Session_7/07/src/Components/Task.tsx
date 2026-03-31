import React, { useState } from "react"
// import { memo } from "react"
import type { Task } from "./TaskDashboard"
import TaskItem from "./TaskItem"

type props = {
    task : Task[]
    handleDelete : (id : number) => void,
    handleAddTask : (data : string) => void,
    handleCompleted : (id : number) => void
}

const Task = ({task,handleDelete,handleAddTask,handleCompleted}:props) => {

    const [data,setData] = useState('')    

    console.log("I'm task");
    

  return (
    <div>
        <p>Task Manager</p>
        <input type="text" value={data} onChange={(e)=>setData(e.target.value)} />
        <button onClick={()=>{handleAddTask(data);setData('')}}>ADD Task</button>
        {
            task.map((val)=>(
                <div key={val.id}>
                {val.isCompleted?<p>✔️</p>:<p>⌛</p>}
                <TaskItem task={val} handleCompleted={handleCompleted}  handleDelete={handleDelete}/>
                </div>
            ))
        }
    </div>
  )
}

export default React.memo(Task)
