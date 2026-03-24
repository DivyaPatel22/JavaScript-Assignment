

import { Component } from "react";


export default class RadioInput extends Component{

    handleChange = (e) =>{
        this.props.onChange({
            value : e.target.value,
            index : this.props.index
        })
    }

    handleBlur= () =>{
        this.props.onBlur(this.props.index)
    }

    render(){
        const {type,name,value,error,required,options} = this.props


        return <div>
            {name} :
              {options.map(data=>(
                <label key={data.value}>
                    <input type={type} name={name} value={data.value} checked={value===data.value} required={required} onChange={this.handleChange} onBlur={this.handleBlur} />
                    {data.label}
                </label>
              ))}
            {error && <p style={{color:"red"}}>{error}</p>}<br /><br />
        </div>

    }
}