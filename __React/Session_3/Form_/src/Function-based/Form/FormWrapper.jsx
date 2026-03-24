import { useState } from "react"
import TextField from "../Tags-field/TextField"
import { Data } from "../Config/Config"
import NumberField from "../Tags-field/NumberField";
import EmailField from "../Tags-field/EmailField";
import Password from "../Tags-field/Password";
import TextAreaField from "../Tags-field/TextAreaField";
import FileField from "../Tags-field/FileField";
import RadioField from "../Tags-field/RadioField";
import SelectField from "../Tags-field/SelectField";
import DobField from "../Tags-field/DobField";
import TagField from '../Tags-field/TagField'



export default function FormWrapper() {

    const [userData , setUserData] = useState(Data)

    const validationMode = userData.find(
        field => field.name === "validationMode"
    )?.value

    function handleSubmit(e){
        e.preventDefault();
        
        const updated = [...userData];
        const value = {};

        updated.forEach(f=>{
            value[f.name] = f.value;
        })

        let error = false;

        updated.forEach(field=>{
            if(field.Validator){
                field.error = field.Validator(field.value,value);
                if(field.error) error=true
            }
        })

        setUserData([...updated]);
        console.log(updated)
        console.log("Data : ",value)

        if(error) return;
    }

    function handleChange({value,index}){
        const old = [...userData]

        old[index].value = value;

        const allvalue = {};
        
        old.forEach(field=>{
            allvalue[field.name]=field.value
        })

        if(validationMode === 'onChange'){
            old.forEach(field=>{
                if(field.Validator){
                    field.error = field.Validator(field.value,allvalue)
                }
            })
        }

        setUserData(old)
    }

    function handleBlur(index){
         if(validationMode !== 'onBlur') return;

         const old = [...userData]

         const allvalue = {}

         old.forEach(field => {
             allvalue[field.name] = field.value
         })

         if(old[index].Validator){
            old[index].error = old[index].Validator(old[index].value,allvalue)
         }

         setUserData(old)
    }

    function handleReset(){
    const resetData = userData.map(field => ({
                 ...field,
                value: "",
                error: ""
            }))

            setUserData(resetData)
    }



  return (
    <div >
      <form id="form" onSubmit={handleSubmit}>
          {userData.map((data,index)=>{
            switch(data.type){
                case "text":
                    return <TextField 
                    key = {data.id}
                    {...data}
                    index={index} onChange={handleChange} onBlur={handleBlur}/>

                case "number" :
                    return <NumberField key={data.id} {...data} index={index} onChange={handleChange} onBlur={handleBlur}/>

                case 'email':
                    return <EmailField 
                    key={data.id}
                    {...data}
                    index={index}
                    onChange={handleChange} onBlur={handleBlur}/>
                
                case 'password':
                    return <Password 
                    key={data.id}
                    {...data}
                    index={index}
                    onChange={handleChange} onBlur={handleBlur}/>

                case "tel" :
                    return <NumberField key={data.id} {...data} index={index} onChange={handleChange} onBlur={handleBlur} />

                case 'textarea' :
                    return <TextAreaField key={data.id} {...data}
                    index={index} 
                    onChange={handleChange} onBlur={handleBlur}/>

                case 'file' :
                    return <FileField 
                    key={data.id} {...data}
                    index={index} 
                    onChange={handleChange} onBlur={handleBlur}/>

                case 'radio' :
                    return <RadioField key={data.id} {...data} index={index} onChange={handleChange} onBlur={handleBlur} />
                
                case 'select' :
                    return <SelectField 
                       key={data.id} {...data} index={index} onChange={handleChange} onBlur={handleBlur}/>
                
                case 'label':
                    return <h2 key={data.value}>{data.value}</h2>
                
                case 'date':
                    return <DobField key={data.id} {...data} index={index} onChange={handleChange} onBlur={handleBlur}></DobField>

                case 'tags':
                    return <TagField key={data.id} {...data} index={index} onChange={handleChange} onBlur={handleBlur} />

                default:
                     return null
            }
          })
          }

        <button type="submit">Submit</button><br/><br/>
        <button type="button" onClick={handleReset}>Clear</button>
      </form>
    </div>
  )
}
