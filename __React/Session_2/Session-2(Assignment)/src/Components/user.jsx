import { useContext } from "react";
import { UserContext } from "./Q4";


function User(){
    const {username , setUsername} = useContext(UserContext)

    return (
        <>
         <input  type="text" value={username}  onChange={e=>setUsername(e.target.value)}  placeholder="Enter Name"/>
        </>
    )
}

export default User ;