
export default function TextAreaField({
    className="",
    id="",
    name="",
    value="",
    required=false,
    placeholder="",
    error="",
    index=-1,
    onChange = () => {},
    onBlur = () => {},
    rows,cols
}) {
    
    function handleChange(e){
        onChange({value:e.target.value,index})
    }
    
    function handleBlur(){
        onBlur(index)
        }

    
  return (
    <div className={className}>
        {name + " :"}
        <textarea id={id} name={name} rows={rows} cols={cols} required={required} value={value} onChange={handleChange}
        onBlur={handleBlur} placeholder={placeholder} ></textarea>
        {error && <p style={{color:"red"}}>{error}</p>}
        <br/><br/>
    </div>
  )
}
