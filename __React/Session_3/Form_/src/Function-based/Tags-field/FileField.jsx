


export default function FileField({
    className ="",
    id="",
    name="",
    placeholder ="",
    error="",
    onChange = () => {},
    onBlur = () => {},
    index = -1
}) {

    function handleChange(e){
        onChange({value:e.target.files[0],index})
    }

        function handleBlur(){
    onBlur(index)
    }

  return (
    <div className={className}>
        {name + " : "}
        <input type="file" 
               id={id} name={name} placeholder={placeholder} 
               onChange={handleChange}
               onBlur={handleBlur}
               />
        {error && <p style={{color:"red"}}>{error}</p>}<br/><br/>
    </div>
  )
}
