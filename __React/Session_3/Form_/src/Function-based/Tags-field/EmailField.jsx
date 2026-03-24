

export default function EmailField({
        className = "",
        type = "email",
        id = "",
        name = "",
        placeholder = "",
        error = "",
        required = false,
        value = "",
        onChange = () => {},
        onBlur = () => {},
        index = -1
    }) 
{

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
                required={required}
                />
        {error && <p style={{color:"red"}}>{error}</p>} <br/><br/>
    </div>
  )
}
