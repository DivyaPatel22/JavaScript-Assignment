import { useCallback, useMemo, useState } from "react"
import  Task  from "./Task"


export type Task = {
    id : number,
    task : string,
    isCompleted : boolean
}

export default function TaskDashboard() {
    const [tasks, setTasks] = useState<Task[]>([])
    const [search,setSearch] = useState('')
    const [showIncomplete, setShowIncomplete] = useState(false)

    // function handleDelete(id : number){
    //     setTasks(prev=>{
    //         return prev.filter((_,i)=>i!==id)
    //     })
    // }

    const handleDelete = useCallback((id : number)=>{
        setTasks(prev=>{
            return prev.filter((val)=>val.id !== id)
        })
    },[])

    const handleAddTask = useCallback((data : string) => {
        setTasks(prev=>{
            const newobj : Task = {id :Date.now(),task : data, isCompleted : false}
            return [...prev,newobj] })
        setSearch('')
    },[])

    const handleComplete = useCallback(((id : number) => {
         setTasks(prev=>{
            return prev.map((val)=>val.id===id?{...val,isCompleted : !val.isCompleted}:val)
        }
        )
    }),[])

    // function handle_Add_Task(data : string){
    //     setTasks(prev=>{
    //         return [...prev,data] })
    // }

    const filteredSerch = useMemo(()=>{
        return tasks.filter(val=>{
            return val.task.toLowerCase().includes(search.toLowerCase())
        })
    },[search,tasks])

    // function handleChange(e : React.ChangeEvent<HTMLInputElement>){
    //     setSearch(e.target.value)
    //     setSerchTask(tasks)
    //     setSerchTask(prev=>prev.filter((val)=>val.toLowerCase().includes(search.toLowerCase())))
    // }

    const handleSearch = (e : React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    const incompleteTask = useMemo(()=>{
        return tasks.filter(val=>!val.isCompleted)
    },[tasks])

  return (
    <div>
        <input type="text" id="serch" value={search} onChange={handleSearch}/><br /><br />
        <button type="button" onClick={()=>setShowIncomplete(prev=>!prev)}>Filter by IsCompleted</button>
        {
            showIncomplete && incompleteTask.map(val=>(
                <div key={val.id}>
                    <p>{val.task}</p>
                    <button onClick={()=>handleComplete(val.id)}>Mark Completed</button>
                </div>
            ))
        }

        {
            search ? filteredSerch.map(val => (
                <p key={val.id}>{val.task}</p>
            ))
            :
            <div>
                <Task task={tasks} handleDelete={handleDelete} handleAddTask={handleAddTask} handleCompleted={handleComplete}/>
            </div>
        }
    </div>
  )
}
