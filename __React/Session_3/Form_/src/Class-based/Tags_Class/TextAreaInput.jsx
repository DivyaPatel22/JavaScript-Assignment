import { Component } from "react";



export default class TextAreaInput extends Component{

    handleChange = (e) => {
        this.props.onChange({
            value : e.target.value,
            index : this.props.index
        })
    }

    handleBlur = () =>{
        this.props.onBlur(this.props.index)
    }

    render(){
        const {id,name,placeholder,value,required,error} = this.props

        const inputdata = {id,name,placeholder,value,required}

        return <div>
            {name} :
            <textarea {...inputdata} onChange={this.handleChange} onBlur={this.handleBlur}></textarea>
            {error && <p style={{color:"red"}}>{error}</p>}<br /> <br/>
        </div>
    }
}