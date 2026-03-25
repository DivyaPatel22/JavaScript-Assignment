import { useEffect, useState } from "react"

export default function useDebounce(Value) {

  const [queryvalue,setQueryValue] = useState(Value)


  useEffect(()=>{
   const timer = setTimeout(()=>{
      setQueryValue(Value)
    },500)

    return ()=>clearTimeout(timer)
  },[Value])

  return queryvalue
}
