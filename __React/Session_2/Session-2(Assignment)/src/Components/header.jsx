import { useContext } from "react";
import { UserContext } from "./Q4";


function Header(){

    const {username} = useContext(UserContext)

    return (
        <>
        <h1>I'm {username}</h1>
        </>
    )
}

export default Header