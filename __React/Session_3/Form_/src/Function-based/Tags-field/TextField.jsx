
export default function TextField(
    {
        className = "",
        type = "text",
        id = "",
        name="",
        value ="",
        placeholder = "",
        onChange = () => {},
        onBlur = () => {},
        error = "",
        index=-1,
        required=false
    }
) {

    function handleChange(e){

      let val = e.target.value;

      if(type === "number" || type === "tel"){
        val = val.replace(/[^0-9]/g,"")
      }
      
      onChange({ value: val, name, id, index })
    }

    function handleBlur(){
   onBlur(index)
     }



  return (
    <div className={className}>
      {name + " : "}  
      <input type={type} id={id} name={name} placeholder={placeholder} value={value} onChange={handleChange}
      onBlur={handleBlur}  required={required} /><br/><br/>
        {error && <p style={{color:"red"}}>{error}</p>}
    </div>
  )
}
