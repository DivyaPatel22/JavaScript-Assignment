import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { add_to_cart } from "../01_React-Redux/action"


export type product = {
    id : number,
    title : string,
    category : string,
    thumbnail : string
}
const products : product[] = [
    {
        id: 0,
        title : "",
        category : "",
        thumbnail : 'asfd'
    }
]

export default function Products() {

    const [data,setdata] = useState(products)

    const dispatch = useDispatch()

    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then(res=>res.json())
        .then(data=>setdata(data.products))
    },[])

  return (
    <div style={{display:"flex",flexWrap:'wrap',alignSelf:'center'}}>
        {
            data.map(val=>(
                <div key={val.id} style={{border:'1px solid black'}}>
                    <img src={val.thumbnail} alt={val.title} />
                    <p>{val.id}</p>
                    <p>{val.title}</p>
                    <p>{val.category}</p>
                    <button type="button" onClick={()=>{dispatch(add_to_cart(val))}}>Add to Cart</button>
                </div>
            ))
        }
    </div>
  )
}
