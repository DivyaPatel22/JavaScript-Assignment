// import { useEffect,useState } from "react"
// import { store } from "../Redux/store"

import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "../01_React-Redux/action"
import type { store } from "../00_Redux/store";

// export default function Counter() {
//     const [val,setVal] = useState(store.getState().count)

//     // const val = store.getState()
//     console.log("I'm in Counter");
    
//     // store.subscribe(()=>{
//     //     console.log("I'm in useEffect");
//     //     setVal(store.getState())
//     // })

//     useEffect(()=>{
        
//         const unsubscirbe = store.subscribe(()=>{
//             console.log("I'm in useEffect");
//             setVal(store.getState().count)
//         })

//         return unsubscirbe
//     },[])

//   return (
//     <div>
//        <p>Hello ! Dosto </p>
//        <button onClick={()=>store.dispatch({type :'DECREMENT'})}>-</button>
//        <p>I'm counter........{val}</p>
//        <button onClick={()=>store.dispatch({type :'INCREMENT'})}>+</button>
//     </div>
//   )
// }


type RootState = {
  count: number;
};

type Dispatch = typeof store.dispatch 


export default function Counter() {

    const val = useSelector((state : RootState)=>state.count)
    console.log(val)

    const dispatch = useDispatch<Dispatch>()


  return (
    <div>
      <p>Hello ! Dosto </p>
          <button onClick={()=>dispatch(decrement())}>-</button>
          <p>I'm counter........{val}</p>
          <button onClick={()=>dispatch(increment())}>+</button>
    </div>
  )
}
