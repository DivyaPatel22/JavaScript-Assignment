import { Component } from "react";



export default class FileInput extends Component{
    handleChange = (e) => {
        this.props.onChange({
            value : e.target.files[0],
            index : this.props.index
        })
    }

    handleBlur = () => {
        this.props.onBlur(this.props.index)
    }

    render(){
        const {type , id, name, placeholder, error, required} = this.props

        return <div>
            {name} :
            <input type={type} id={id} name={name} placeholder={placeholder} required={required} onChange={this.handleChange} onBlur={this.handleBlur}/>
            {error && <p style={{color:"red"}}>{error}</p>}<br /> <br/>
        </div>
    }
}