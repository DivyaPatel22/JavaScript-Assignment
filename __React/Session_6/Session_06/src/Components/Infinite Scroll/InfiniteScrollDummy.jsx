import { useState } from "react"



const thershold = 20 ;

export default function InfiniteScrollDummy() {

    const [data,setdata] =useState([...new Array(40)])
    const [loading,setLoading] = useState(false)

    function handleScroll(e){
        const scrollTop = e.target.scrollTop
        const clientHeight = e.target.clientHeight
        const scrollHeight = e.target.scrollHeight

        const remianingScroll = scrollHeight - (scrollTop+clientHeight)

        // console.log(remianingScroll);
        if(remianingScroll<thershold && !loading){
            loadMore()
        }
        
    }

    const loadMore = () => {
        setLoading(true)
          setTimeout(()=>{
            setdata((prev=>[...prev,...new Array(10)]))
            setLoading(false)
          },1000)
    }

  return (
    <div onScroll={handleScroll} className="scroll-div" style={{height: '500px',overflow : 'auto',border:'1px solid black'}}>
        {data.map((row,i)=>{
            return (
                <div key={i}>
                    {i+1}
                    {/* <hr /> */}
                </div>
            )
        })}
        {loading && <p>Loadingggg...........</p>}
    </div>
  )
}
