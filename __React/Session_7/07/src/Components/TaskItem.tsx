import React from "react"
import type { Task } from "./TaskDashboard"


type props = {
    task : Task
    handleDelete : (id : number) => void,
    handleCompleted : (id : number) => void
}

const TaskItem = ({task,handleDelete,handleCompleted}:props) => {

    console.log("I'm TaskItems");
    
  return (
    <div>
        <p>{task.task}</p>
        <button onClick={()=>handleCompleted(task.id)}>Toggle Complete</button>
        <button onClick={()=>handleDelete(task.id)} >Delete</button>
    </div>
  )
}

export default React.memo(TaskItem)
