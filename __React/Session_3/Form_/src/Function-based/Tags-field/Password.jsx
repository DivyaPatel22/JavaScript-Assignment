

export default function Password(
    {
        className = "",
        type = "password",
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
        onChange({value:e.target.value,index})
    }

    function handleBlur(){
   onBlur(index)
}





  return (
    <div className={className}>
      {name + " : "}  
      <input type={type} 
             id={id}   name={name} placeholder={placeholder} value={value} 
             onChange={handleChange}
             onBlur={handleBlur}  required={required} /><br/><br/>
        {error && <p style={{color:"red"}}>{error}</p>}
    </div>
  )
}