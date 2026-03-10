// useRef : it makes value persistent across rerendering of component in react 

import { useRef, useState } from "react"

// useRef is a React Hook that lets you reference a value that’s not needed for rendering.
//cosnt ref = useRef(initial value)


export default function UseRef() {

    const [time , setTime] = useState(null)
    const [now , setNow] = useState(null)

    const ref = useRef(null)


    function handleStart(){
        clearInterval(ref.current)

        if(time === null && now === null ){
        setTime(Date.now())
        setNow(Date.now())
        }

        ref.current = setInterval(() => {
            setNow(Date.now() - time)
        }, 10);
    }

    function handleStop(){
        clearInterval(ref.current)
    }

    
    function handleRestart(){
        clearInterval(ref.current)
        setTime(Date.now())
        setNow(Date.now())
        
        ref.current = setInterval(() => {
            setNow(Date.now())
        }, 10);   
    }
    
    let seconds = 0
    if(time != null && now != null){
        seconds = (now - time)/1000
    }

  return (
    <div>
       <h1>Timer : {seconds.toFixed(4)} </h1>
        <br/>
       <button onClick={handleStart}>Start</button>
       <br/>
       <button  onClick={handleStop}>Stop</button>       
       <br/>
       <button onClick={handleRestart}>Restart</button>
    </div>
  )
}


