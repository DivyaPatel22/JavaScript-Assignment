import { Component } from "react";



export default class SelectInput extends Component{

    handleChange =(e) =>{
        this.props.onChange({
            value : e.target.value,
            index : this.props.index
        })
    }

    handleBlur=()=>{
        this.props.onBlur(this.props.index)
    }

    render(){
        const {name,value,error,required,options} = this.props


        return <div>
            {name} :
            <select name={name} value={value}  onChange={this.handleChange} onBlur={this.handleBlur} required={required}>
                <option value="select">Select {name}</option>
                {options.map(data=>(
                    <option key={data.value} value={data.value}>{data.label}</option>
                ))}
            </select>
            {error && <p style={{color:"red"}}>{error}</p>}<br /> <br />
        </div>

    }
}