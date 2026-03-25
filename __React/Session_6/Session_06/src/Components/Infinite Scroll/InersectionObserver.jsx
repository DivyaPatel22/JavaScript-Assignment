import { useEffect, useRef, useState } from "react"

export default function InersectionObserverCompo() {

    const [data] = useState([...new Array(40)])

    const arraylistref = useRef([])


    useEffect(()=>{
        const observer = new IntersectionObserver(function (entries) {
            console.log(entries);
            
            entries.forEach((entry)=>{
                if(entry.isIntersecting){
                    entry.target.style.backgroundColor = 'red';
                }else {
                    entry.target.style.backgroundColor = 'blue';
                }
            })
        },{
            threshold : 0.5,
            rootMargin : '200px'
        }); 

        arraylistref.current.forEach((el)=>{
            observer.observe(el)
        })
    },[])

  return (
    <div>
        {data.map((ro,i) => {
            return (
                <div ref={(el)=>(arraylistref.current[i] = el)}    key={i}>
                    {i+1}
                    <hr />
                </div>
            )
        })
        }
    </div>
  )
}
