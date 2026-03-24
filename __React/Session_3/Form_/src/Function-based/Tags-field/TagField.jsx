import { useState } from "react"


export default function TagField(
    {
        type="text",
        id="",
        name="",
        value=[],
        placeholder="",
        error = "",
        onChange = () => {},
        onBlur = () => {},
        index=-1
    }
){

    const [input,setInput] = useState("")

    function addTag(e){
        if(e.key === "Enter" && input.trim()){
            e.preventDefault();

            const newTag = [...value,input.trim()]

            onChange({
                value: newTag,index
            })

            setInput("")
        }
    }

    function removeTag(tagindex){
        const newTag = value.filter ((data,i) => i != tagindex)
        console.log(newTag)
        onChange({value:newTag,index})
    }

  return (
    <div>
        {name} :
        <input type={type} id={id} name={name} value={input} placeholder={placeholder} onKeyDown={addTag} onChange={(e)=>setInput(e.target.value)} onBlur={()=>onBlur(index)}/>
        {
            value.map((data,index)=>(<>
                    <span key={data} >{data}</span>
                    <button type="button" onClick={()=>removeTag(index)}>x</button>
            </>
            ))
        }
         {error && <p style={{color:"red"}}>{error}</p>}
         <br /> <br/>
    </div>
  )
}
