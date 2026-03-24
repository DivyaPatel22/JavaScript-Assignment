import { Component } from "react";



export default class PasswordInput extends Component{
     handleChange = (e) =>{
        this.props.onChange({
            value : e.target.value,
            index : this.props.index
        })
     }

     handleBlur = ()=>{
        this.props.onBlur(this.props.index)
     }

     render(){
        const {type,id,name,value,placeholder,error,required} = this.props

        const inputdata = {type,id,name,value,placeholder,required}

        return <div>
            {name} :
            <input {...inputdata} onChange={this.handleChange} onBlur={this.handleBlur} />
            {error && <p style={{color:"red"}}>{error}</p>}<br /> <br/>
        </div>
     }
}