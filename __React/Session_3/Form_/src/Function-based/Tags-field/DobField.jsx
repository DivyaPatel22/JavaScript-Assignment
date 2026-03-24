


export default function DobField({
        className = "",
        type = "date",
        id = "",
        name="",
        value ="",
        placeholder = "",
        onChange = () => {},
        onBlur = () => {},
        error = "",
        index=-1,
        required=false
}) {

    function handleChange(e){
        onChange({value:e.target.value,index})
    }
    function handleBlur(){
       onBlur(index)
    }
  return (
    <div className={className}>
        {name + " : "}
         <input type={type} 
         id={id}
         name={name}
         value={value}
         onChange={handleChange}
         onBlur={handleBlur}
         placeholder={placeholder}
         required={required}/>

         {error && <p style={{color:"red"}}>{error}</p>}
         <br /> <br/>
    </div>
  )
}
