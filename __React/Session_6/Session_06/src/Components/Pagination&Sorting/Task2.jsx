// - **The Task:** Display 10 items per page. Add "Next" and "Previous" buttons. Add a dropdown to sort by Price (Low to High / High to Low).
// - **The Constraint:** Use API params for this, not just client-side logic.
// - **Expectation:** Use URL queries like `?limit=10&skip=0&sortBy=price&order=asc`.

import { useEffect, useState } from "react";
// import {useInView} from 'react-intersection-observer';
import './Task2.css'

// const baseurl = "https://dummyjson.com/recipes"

export default function Task2() {
  const [recipe, setRecipe] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isError , setError] = useState(false);
  const [pagenumber, setPageNumber] = useState(0);
  const [limitperpage ,setLimit] = useState(30)
  const [sorttype , setSorttype] = useState("")
  const [name,setName] =useState("")
  const [newrecipe , setNew] = useState({image : "" , name:""})

  // const {ref,inView} = useInView()
  // const [options , setOptions] = useState({
  //     limit : 10,
  //     skip : 0,
  //     sortBy : "",
  //     order : ""
  // })

  // function getUrl(option){
  //     const optional = Object.entries(option)
  //     console.log(option)
  // }

 
  useEffect(()=>{
    // setLoading(true)
     fetch(`https://dummyjson.com/recipes?sortBy=${name}&order=${sorttype}&limit=${limitperpage}&skip=${pagenumber}`)
         .then((res) => res.json())
            .then((data) => {
                setRecipe(data.recipes);
                setLoading(false);
            }).catch(()=>{setError(true)})
  },[sorttype,pagenumber,limitperpage,name])



  function handleNext() {
    setPageNumber((prev) => prev + limitperpage);
  }

  function handlePrev() {
    setPageNumber((prev) => prev - limitperpage);
  }

  function handleSelect(e){
     setSorttype(e.target.value);
     setName("name")
  }

  function handleDefualt(){
      setSorttype("");
      setName("");
      setPageNumber(0)
      setLimit(10)
  }

//   useEffect(() => {});

  if(isError){
    return (
      <>
      <h1>No Results Found</h1>
      <p>Error occurs during api fetching</p>
      </>
    )
  }

  if (isLoading) {
    return <h1>Loadingg..............</h1>;
  }


  function handleClick(id){
    const newrec = recipe.filter(data=>data.id !== id)
    setRecipe(newrec)
  }

  function handleChange(e){

    setNew(prev=>{
            return {
                ...prev,
               [e.target.name] : e.target.value
            }})
    // if(e.target.name === "image"){
    //     setNew(prev=>{
    //         return {
    //             ...prev,
    //             image : e.target.value
    //         }
    //     })
    // }
    // else if (e.target.name === "name"){
    //     setNew(prev=>{
    //         return {
    //             ...prev,
    //             name : e.target.value
    //         }
    //     })
    // }
    console.log(newrecipe)
  }

  function handlesubmit(){
    setRecipe(prev=>[...prev,newrecipe])
  }

  return (
    <div className="container">
         <div className="controls">
            <div className="control-group">
            <label htmlFor="limit">Enter Limit : </label>
            <input type="number" id="limit" value={limitperpage} onChange={(e)=>setLimit(Number(e.target.value))}  />
            </div>
            <div className="buttons">
            <button onClick={handlePrev} disabled={pagenumber === 0}>
                Prev
            </button>
            <button onClick={handleNext} disabled={pagenumber >= 50}>
                Next
            </button>
            <button type="button" onClick={handleDefualt}>Default</button></div>

            <div className="control-group">
            <select name="sort" id="sort" value={sorttype} onChange={handleSelect}>
                <option value="">Select</option>
                <option value='asc'>Sort by Name & Asc</option>
                <option value='desc'>Sort by Name & Desc</option>
            </select>
            </div>
          </div>
        <div className="card-grid">
      {recipe.map((data) => (
        <div className="card" key={data.name}>
          <img src={data.image} alt={data.name} height="200" width="200" />
          <p className="title">{data.name}</p>
          <button type="button" onClick={()=>handleClick(data.id)}>Delete</button>
        </div>
      ))}
      {/* </div>
      {/* <div ref={ref}> */}
      </div> */
      
      <h1>Add Recipe</h1>
      <input type="text" id="image" name="image" value={newrecipe.image} onChange={handleChange} />
      <input type="text" id="name" name="name" value={newrecipe.name} onChange={handleChange} />
      <button type="button" onClick={handlesubmit}>ADD</button>
    </div>
  );
}
