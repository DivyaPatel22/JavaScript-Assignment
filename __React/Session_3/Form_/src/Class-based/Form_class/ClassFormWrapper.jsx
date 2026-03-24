import { Component } from "react";
import TextInput from "../Tags_Class/TextInput";
import NumberInput from "../Tags_Class/NumberInput";
import SelectInput from "../Tags_Class/SelectInput";
import EmailInput from "../Tags_Class/EmailInput";
import PasswordInput from "../Tags_Class/PasswordInput";
import RadioInput from "../Tags_Class/RadioInput";
import DobInput from "../Tags_Class/DobInput";
import FileInput from "../Tags_Class/FileInput";
import TextAreaInput from "../Tags_Class/TextAreaInput";



export default class ClassFormWrapper extends Component{

    render(){
        const {inputdata} = this.props

        return <div>
            <form onSubmit={this.props.handleSubmit}>
                {inputdata?.map((data,index)=>{
                    switch(data.type){
                        case 'text' :
                            return <TextInput key={data.id} {...data}
                                        index={index}
                                        onChange={this.props.handleChange}
                                        onBlur={this.props.handleBlur}  />

                        case 'number' : 
                            return <NumberInput key={data.id} {...data}
                                        index={index}
                                        onChange={this.props.handleChange}
                                        onBlur={this.props.handleBlur} />

                        case 'email' :
                            return <EmailInput key={data.id} {...data}
                                        index={index}
                                        onChange={this.props.handleChange}
                                        onBlur={this.props.handleBlur} />

                        case 'password' :
                            return <PasswordInput key={data.id} {...data}
                                        index={index}
                                        onChange={this.props.handleChange}
                                        onBlur={this.props.handleBlur} />
                        
                        case 'radio' : 
                              return <RadioInput key={data.id} {...data}
                                        index={index}
                                        onChange={this.props.handleChange}
                                        onBlur={this.props.handleBlur} />

                        case 'select' :
                            return <SelectInput key={data.id} {...data}
                                        index={index}
                                        onChange={this.props.handleChange}
                                        onBlur={this.props.handleBlur} />
                        
                        case 'date' :
                            return <DobInput key={data.id} {...data}
                                        index={index}
                                        onChange={this.props.handleChange}
                                        onBlur={this.props.handleBlur} />
                        
                        case 'file' :
                            return <FileInput key={data.id} {...data}
                                        index={index}
                                        onChange={this.props.handleChange}
                                        onBlur={this.props.handleBlur} />
                        
                        case 'textarea' :
                            return <TextAreaInput key={data.id} {...data}
                                        index={index}
                                        onChange={this.props.handleChange}
                                        onBlur={this.props.handleBlur} />
                        
                        case 'label' :
                            return <h3 key={data.value}>{data.value}</h3>

                        default :
                           return null
                    }
                })}

                <button type="submit">Submit</button><br/><br/>
                <button type="button" onClick={this.props.handleReset}>Clear</button>
            </form>
        </div>
    }
}