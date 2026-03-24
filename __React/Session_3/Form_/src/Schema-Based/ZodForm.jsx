import { useForm } from "react-hook-form"
import {zodResolver} from '@hookform/resolvers/zod'
import { Schema } from "./Schema"



export default function ZodForm() {

    const {register, handleSubmit, watch, formState : {errors}} = useForm({resolver: zodResolver(Schema)})

    const gender = watch('gender')

    const onSubmit = (data) => {
        console.log("data",data)
    }


  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
           <h3>Personal info :</h3>

          Name : <input type="text" {...register('name')} placeholder="Enter your Name.."/>
          {errors.name && <p style={{color:"red"}}>{errors.name.message}</p>}
          <br /><br />
          Age : <input type="number" {...register("age", { valueAsNumber: true })} placeholder="Enter Age" />
          {errors.age && <p style={{color:"red"}}>{errors.age.message}</p>}
          <br /><br />
          Email : <input type="email" {...register('email')} placeholder="Enter your Email" />
          {errors.email && <p style={{color:"red"}}>{errors.email.message}</p>}
          <br /><br />
          Birthdate : <input type="date" {...register("birthdate")} />
          {errors.birthdate && <p style={{color:"red"}}>{errors.birthdate.message}</p>}
             <br /><br />
          Gender : <select {...register("gender")}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
            {errors.gender && <p style={{color:"red"}}>{errors.gender.message}</p>}
                    <br /><br />
          FatherName : <input type="text" {...register("fatherName")} placeholder="Enter your father name.."/>
          {errors.fatherName && <p style={{color:"red"}}>{errors.fatherName.message}</p>}
          <br /><br />
          MotherName : <input type="text" {...register("motherName")} placeholder="Enter your mother name..."/>
          {errors.motherName && <p style={{color:"red"}}>{errors.motherName.message}</p>}
          <br /><br />
          Marital Status : 
          <input type="radio" value="single" {...register("maritalStatus")}/><label htmlFor="maritalStatus">Single</label>
          <input type="radio"  value="married" {...register("maritalStatus")}/><label htmlFor="maritalStatus">Married</label>
          {errors.maritalStatus && <p style={{color:"red"}}>{errors.maritalStatus.message}</p>}
          <br /><br />

          <h3>Contact info :</h3>
          phoneNo. : <input {...register("phone")} />
          {errors.phone && <p style={{color:"red"}}>{errors.phone.message}</p>}
          <br /><br />
          Alternate phoneNo. : <input {...register("alternatePhone")}/>
          {errors.alternatePhone && <p style={{color:"red"}}>{errors.alternatePhone.message}</p>}
          <br /><br />

          creditCard Number : <input {...register("creditcard")} />
          {errors.creditcard && <p style={{color:"red"}}>{errors.creditcard.message}</p>}
          <br />

          <h3>Registartion Detail for profile :</h3>
          Profile Pic : <input type="file" {...register("profilepic")} />
          {errors.profilepic && <p style={{color:"red"}}>{errors.profilepic.message}</p>}
          <br /><br />
          Banner Pic : <input type="file" {...register("bannerpic")} />
          {errors.bannerpic && <p style={{color:"red"}}>{errors.bannerpic.message}</p>}
          <br /><br />

          Password : <input type="password"  {...register("password")} />
          {errors.password && <p style={{color:"red"}}>{errors.password.message}</p>}
          <br /><br />
          Confirm Password : <input type="password" {...register("confirmPassword")} /> 
          {errors.confirmPassword && <p style={{color:"red"}}>{errors.confirmPassword.message}</p>}
          <br /><br />

          <button type="submit">Submit</button><br /><br />
          <button type="reset">Clear</button>
      </form>
    </div>
  )
}
