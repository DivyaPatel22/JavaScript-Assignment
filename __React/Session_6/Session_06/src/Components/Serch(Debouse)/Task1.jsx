// - **The Task:**  Create a search bar that filters the list as you type.
// - **The Constraint:** Do **not** trigger an API call on every keystroke. Wait **500ms** after the user stops typing before fetching.
// - **Expectation:** Use `useEffect` with a `setTimeout` or a custom `useDebounce` hook. [2, 3, 4, 5, 6]

import {  useEffect, useState } from "react"
import useDebounce from "./UseDebounce"




export default function Task1() {

    const [search,setSearch] = useState("")
    const [name,setName] = useState([])
    const [recipe,setRecipe] = useState([])
    const value = useDebounce(search)

    useEffect(()=>{
        fetch(`https://dummyjson.com/recipes`)
            .then(res => res.json())
            .then(data=>{
                console.log(data)
                if(Array.isArray(data.recipes)){
                    setName(data.recipes.map(field=>field.name))
                }
                
            });
    },[])

    useEffect(()=>{
        fetch(`https://dummyjson.com/recipes/search?q=${value.trim()}`)
            .then(res => res.json())
            .then(data=>{console.log(data) ;  setRecipe(data.recipes)});
    },[value])

    
  return (
    <div style={{display:'block',justifyContent:'center',alignItems:'center'}}>
        <input type="text" id="serchvalue" name="serchvalue" value={search} onChange={(e)=>setSearch(e.target.value)} />
        <select name="name" id="name">
            <option value="select">Select</option>
            {
                name.map(data=>(
                    <option value={data} key={data}>{data}</option>
                ))
            }
        </select>
        <br />
        <h1>Recipe Details :</h1>
        <h1>Debouse serch : {value}</h1>
        <hr />
        {
            recipe.map(data=>
                (
                <div key={data.name} style={{display:'flex',justifyContent:'center',alignItems:'center',margin:0,flexDirection:'column',flexWrap:'wrap'}}>
                  <img src={data.image} alt={data.name}  height='300' width='300'/>
                  <h3>{data.name}</h3>
                  <ul>
                  {data.ingredients.map(data=>(
                       <li>{data}</li>
                  ))}
                  </ul>
                </div>
            ))
        }

        
    </div>
  )
}
