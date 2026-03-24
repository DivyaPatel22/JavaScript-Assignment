

import { Component } from "react";
import { Data } from "../../Function-based/Config/Config";
import ClassFormWrapper from "./ClassFormWrapper";



export default class ClassForm extends Component{
    constructor(props){
        super(props)

        this.state = ({
            userData : Data
        })

        this.handleChange = this.handleChange.bind(this)
        this.handleBlur = this.handleBlur.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleReset = this.handleReset.bind(this)
    }


    getValidationMode(){
        return this.state.userData.find(field=>field.name==="validationMode")?.value
    }



    handleSubmit(e){
        e.preventDefault();

                const oldData = [...this.state.userData];

        const allvalue = {}

        oldData.forEach(field=>{
            allvalue[field.name] = field.value
        })

        let error = false

        oldData.forEach(field => {
            if(field.Validator){
                field.error = field.Validator(field.value, allvalue)
            }
            if(field.error) error = true
        })

        this.setState({userData : oldData})
        console.log("Data : ", allvalue)

        if(error) return;
        
    }



    handleChange({value,index}){
        const oldData = [...this.state.userData]

        oldData[index].value = value

        const allvalue = {}

        oldData.forEach((field)=>{
            allvalue[field.name] = field.value
        })

        if(this.getValidationMode() === "onChange"){
            if(oldData[index].Validator){
                oldData[index].error = oldData[index].Validator(oldData[index].value,allvalue)
            }
        }

        this.setState({userData : oldData})
    }



    handleBlur(index){
        if(this.getValidationMode() !== "onBlur") return;

        const oldData = [...this.state.userData];

        const allvalue = {}

        oldData.forEach(field=>{
            allvalue[field.name] = field.value
        })

        if(oldData[index].Validator){
            oldData[index].error = oldData[index].Validator(oldData[index].value,allvalue)
        }

        this.setState({userData : oldData})
    }



    handleReset(){
        const resetData = this.state.userData.map((field)=>({
            ...field,
            value : "",
            error : ""
        }))

        this.setState({ userData : resetData})
    }


    render(){
        return <div>
            <ClassFormWrapper inputdata={this.state.userData} handleChange={this.handleChange} handleBlur={this.handleBlur} handleSubmit={this.handleSubmit} handleReset={this.handleReset}/>
        </div>
    }
}