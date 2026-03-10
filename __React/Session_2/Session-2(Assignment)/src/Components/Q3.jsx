// 3. **useEffect dependency**

import { useEffect, useState } from "react"

    
//     Build a small “user by ID” viewer: one state for `userId`, one for `user`. Use `useEffect` to fetch when `userId` changes. Include cleanup so that if the request finishes after `userId` changed or the component unmounted, you don’t call `setUser`.

function Q3(){

    const [userID , setUserID] = useState(1)
    const [user , setUser] = useState(null)

    useEffect(()=>{
        let flag = false;

        fetch(`https://jsonplaceholder.typicode.com/users/${userID}`).then(response => response.json()).then(data =>{
            if(!flag){
                setUser(data)
            }
        })

        return ()=>{
            flag = true
        }
    })

    return (
        <>
        <h1>User : {userID} </h1>
        <button onClick={()=>setUserID(userID+1)}>Next User</button>

        {user && (
            <div>
                <h2>{user.name}</h2>
                <h2>{user.email}</h2>
            </div>
        )}
        </>
    )

}
export default Q3
