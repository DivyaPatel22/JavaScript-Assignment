import { Component } from "react";


export default class DobInput extends Component{

    handleChange = (e) => {
        this.props.onChange({
            value : e.target.value,
            index : this.props.index
        })
    }

    handleBlur = () => {
        this.props.onBlur(this.props.index)
    }


    render(){

        const {type , id, name, placeholder, value, error, required} = this.props

        return <div>
            {name} :
            <input type={type} id={id} name={name} placeholder={placeholder} value={value} required={required} onChange={this.handleChange} onBlur={this.handleBlur}/>
            {error && <p style={{color:"red"}}>{error}</p>}<br /> <br/>
        </div>
    }
}