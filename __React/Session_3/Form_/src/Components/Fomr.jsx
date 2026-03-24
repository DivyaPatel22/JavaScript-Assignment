import { useState } from "react"


export default function Fomr() {

    const [Fname , setFname] = useState("")
    const [Lname , setLname] = useState("")
    const [Age , setAge] = useState(0)
    const [Email , setEmail] = useState("")

    function handleReset(){
        setEmail(""),
        setFname(""),
        setLname(""),
        setAge(0)
    }

  return (
    <div>
        <form >
        <label htmlFor="fname">First Name</label>
       <input type="text" id="fname" name="fname" placeholder="Enter First Name" value={Fname} onInput={(e)=>setFname(e.target.value)} required/>
        <br />
        <label htmlFor="lname">Last Name</label>
       <input type="text" id="lname" name="lname" placeholder="Enter Last Name" value={Lname} onInput={(e)=>setLname(e.target.value)}/>
        <br />
        <label htmlFor="age">Age</label>
       <input type="number" id="age" name="age" placeholder="Enter age" value={Age} onInput={(e)=>setAge(e.target.value)} required/>
        <br />
       <label htmlFor="email">Email</label>
       <input type="email" id="email" name="email" placeholder="Enter email address" value={Email} onInput={(e)=>setEmail(e.target.value)} required/>
        <br />

        <select name="gender" id="gender" required>
            <option value="male">Male</option>
            <option value="female">Female</option>
        </select>
        <br />

        <label htmlFor="password">Password </label>
        <input type="password" id="password" required />
        <label htmlFor="confirmpassword">Confirm Password</label>
        <input type="password" id="confirmpassword" required />

        <br/>

       <label htmlFor="phoneNo">Phone No.</label>
       <input type="number" id="phoneNo" name="phoneNo" placeholder="Enter PhoneNo." required/>
        <br />

       <label htmlFor="creditcard">Credit card NO : </label>
       <input type="text" id="creditcard" name="creditcard" placeholder="Enter credit card no." required/>
        <br />

       <button type="submit" >Submit</button>        <br />
       <button type="button" onClick={handleReset}>Clear</button>
       </form>

       <h1>Name is {Fname+" "+Lname}</h1>
       <h1>Age : {Age}</h1>
       <h1>Email : {Email}</h1>
    </div>
  )
}
