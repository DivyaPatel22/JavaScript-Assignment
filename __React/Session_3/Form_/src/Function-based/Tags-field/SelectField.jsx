

export default function SelectField({
  name="",
  value="",
  options=[],
  onChange=()=>{},
  onBlur=()=>{},
  index=-1,
  error=""
}) {

  function handleChange(e){
    onChange({value:e.target.value,index})
  }

  function handleBlur(){
   onBlur(index)
}


  return (
    <div>
      {name} :
      <select value={value} onChange={handleChange} onBlur={handleBlur}>
        <option value="">Select Option</option>
        {options.map((opt)=>(
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {error && <p style={{color:"red"}}>{error}</p>}
      <br/><br/>
    </div>
  )
}