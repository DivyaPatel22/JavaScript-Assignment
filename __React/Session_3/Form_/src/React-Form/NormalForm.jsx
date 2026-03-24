import { useForm } from 'react-hook-form'

export default function NormalForm() {

    const {register , handleSubmit ,watch, formState: { errors }} = useForm();

    function submit(e){
        console.log(e)
    }

    const password = watch("password")

  return (
    <>
    <form onSubmit={handleSubmit(submit)}>
         Name : <input type="text" id="name" placeholder='Enter Name' {...register('name',{
            required : "Name is required...."
         })} />
         {errors.name && errors.name.message}

         <br/> <br/> 

         Age : <input type="number" id="age" {...register('age',{
            min : {
                value : 1,
                message : "Minimum age should be 1"
            },
            max : {
                value : 80,
                message : "Maximum age should be 80"
            },
            required : "Age should be required"
         })} />
         {errors.age && errors.age.message}

         <br/> <br/> 


         Gender : <select name="gender" id="gender" {...register('gender',{required:true})}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
         </select>
         {errors.gender && errors.gender.message}

         <br/> <br/> 

         Email : <input type="email" id="email" {...register('email',{
            required : "Email is required",
            pattern: /^\S+@\S+$/i
         })} />
         {errors.email && errors.email.message}

         <br/> <br/> 

         Password : <input type="password" {...register('password',{required:true,minLength:{
            value : 8,
            message : "Pasword Length must be 8"
         }})} />
         {errors.password && errors.password.message}

         <br/> <br/> 

         Confirm Password : <input type="password" {...register('cpassword',{
            required :"confirm password is required.",
            validate : (value) => value === password || "password not matched...." 
         })} />
         {errors.cpassword && errors.cpassword.message}

         <br/> <br/> 

         Phone No. : <input type="number" id="phoneno" {...register('phoneno',{
            required : 'Phone No. is requireed',
            maxLength :{
                value :10,
                message :"length is not valid for phoneno."
            },
            minLength :{
                value :10,
                message :"length is not valid for phoneno."
            }
         })} />
         {errors.phoneno && errors.phoneno.message}

         <br /> <br/>

         Credit card Number : <input type="text" {...register('creditcard',{
            required : true,
            pattern: {
                        value: /^[0-9]{13,19}$/,
                        message: "Card number must be 13–19 digits"
                    }})}/>
         {errors.creditcard && errors.creditcard.message}

         <br /> <br />

         Birthdate : <input type="date" {...register('dob',{required:true})} />
         {errors.dob && errors.dob.message}

         <br /> <br />

         Profile Pic : <input type="file" {...register("file",{required : true})} /> 
         {errors.file && errors.file.message}<br/>

         Banner pic : <input type="file" {...register("file2")} /> <br /> <br />
         <h4>Marital Status</h4>
          Married : <input type="radio" name="status" />
          Unmarried : <input type="radio" name="status" />

          <br />

         <button>Submit</button>
    </form>
    </>
  )
}
