import { Component } from "react";


export default class NumberInput extends Component{

    handleChange = (e) => {
        let val = e.target.value

        if(this.props.type === "number" || this.props.type === "tel"){
            val = val.replace(/[^0-9]/g,"")
        }

        this.props.onChange({
            value : val,
            index : this.props.index
        })
    }

    handleBlur = () => {
        this.props.onBlur(this.props.index)
    }

    render(){
        const {type,id,name,placeholder,value,error,required} = this.props

        const inputdata = {type,id,name,placeholder,value,required}

        return <div>
            {name} :
            <input {...inputdata}  onChange={this.handleChange} onBlur={this.handleBlur}/>
            {error && <p style={{color:"red"}}>{error}</p>}<br /> <br/>
        </div>
    }
} 