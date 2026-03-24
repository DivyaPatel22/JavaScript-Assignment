


export default function RadioField({
    className = "",
    id="",
    name="",
    value="",
    options=[],
    onChange = () => {},
    onBlur = () => {},
    error = "",
    index = -1,

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
       
       { options.map((opt)=>(
            <label key={opt.value}>
                <input type="radio"
                   id={id}
                   name={name}
                   value={opt.value}checked={value===opt.value} onChange={handleChange}
                   onBlur={handleBlur}/>
                   {opt.label}
            </label>
        )) }

        {error && <p style={{color:"red"}}>{error}</p>}
       <br/><br/>
    </div>
  )
}
