// 4. **useContext**

import { createContext, useState } from "react";
import Header from "./header";
import User from "./user";

    
//     In the sandbox, add a context (e.g.`ThemeContext` or `UserContext`), wrap part of the app in a Provider, and build a child component that reads the value with `useContext` and displays it (e.g. theme name or user name).


 export const UserContext = createContext()

function Q4(){
    const [username , setUsername] = useState("unkown")

    return (
        <>
        <UserContext value={{username,setUsername}}>
        <Header />
        <User />
        </UserContext>
        </>
    )
}

export default Q4;