// 2. **useEffect + cleanup**

import { useEffect, useState } from "react"

    
//     Create a component that starts a`setInterval`when it mounts, updates a counter every second, and clears the interval in a`useEffect`cleanup. Unmount the component (e.g. toggle with a button) and confirm the interval stops (no console errors or extra ticks).


function Q2(){
     
     const [count , setCount] = useState(0)
     
     useEffect(()=>{
        
       const interval = setInterval(()=>{
            setCount(prevCount => prevCount+1)
        },1000)

        return ()=> clearInterval(interval)
     },[])


     return (
        <>
        <h1>Counter : {count}</h1>
        </>
     )
}

export default Q2