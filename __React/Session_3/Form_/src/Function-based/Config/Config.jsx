


export const Data = [
        {
        type: "select",
        id: "validationMode",
        name: "validationMode",
        value: "",
        options: [
            { label: "Validate on Change", value: "onChange" },
            { label: "Validate on Blur", value: "onBlur" },
            { label: "Validate on Submit", value: "onSubmit" }
        ],
        error: ""
    },
    {type : "label",
        id : "Personal info :",
        value : "Personal info :"
    },
    {
        type : "text",
        id : "name",
        name : "Name",
        placeholder : "Enter your name..",
        value : "",
        required :  true,
        error : "",
        Validator : function(value){
           if(!value) return "Name is required"
           if(value.length>=20) return "Name max length is 20"
           return ""
        }
    },
    {
        type : "number",
        id : "age",
        name : "age",
        placeholder : "Enter your Age..",
        value : 1,
        required :  true,
        error : "",
        Validator : function(value){
           if(!value) return "Age is required"
           if(!/^[0-9]+$/.test(value)) return "only numbers allowed"
           if(value < 1 || value > 80)return "Enter valid age"
           return ""
        }
    },
    {
        type : "email",
        id : "email",
        name : "email",
        placeholder : "Enter Email ID..",
        required :  true,
        value : "",
        error : "",
        Validator : function(value){
           if(!value) return "Email is required"
           const emailregex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/
           if(!emailregex.test(value)) return "Enter valid Email id"
           return ""
        }
    },
    {
        type : "date",
        id : "birthdate",
        name : "birthdate",
        placeholder : "Enter birthdate",
        required :  true,
        value : "",
        error : "",
        Validator : function(value){
           if(!value) return "Birthdate is required"
           return ""
        }
    },
    {
        type : "select",
        id:"gender",
        name : "gender",
        options : [{label : "Male",value:"male"},
            {label : "Female",value:"female"},
            {label : "Other",value:"other"}
        ],
        required :  true,
        value : "",
        error : "",
        Validator : function(value){
           if (!value) return "Gender is required";

          return "";
        }
    },
    {
        type : "text",
        id:"FatherName",
        name : "FatherName",
        placeholder:"Enter your Father Name...",
        required :  false,
        value : "",
        error : "",
        Validator : function(value,allvalue){
           if ( allvalue.gender === "male"  && !value) return "Father Name is required for male";
           return "";
        }
    },
    {
        type : "text",
        id:"MotherName",
        name : "MotherName",
        placeholder:"Enter your Mother Name...",
        required :  false,
        value : "",
        error : "",
        Validator : function(value,allvalue){
           if ( allvalue.gender === "female"  && !value) return "Mother Name is required for female";
           return "";
        }
    },
    {
        type : "radio",
        id : "maritalstatus",
        name : "maritalstatus",
        required :  true,
        value : "",
        options: [
        { label: "Single", value: "single" },
        { label: "Married", value: "married" }
          ],
    error : "",
    Validator : function(value){
        if (!value) return "Please select marital status";
        return "";
    }
},
{
    type : "textarea",
    id : "address",
    name : "Address",
    placeholder : "Enter your Address",
    required :  true,
    value : "",
    error : "",
    Validator : function(value){
       if (!value) return "Address is required";
       if(value.length <10) return "Address is too short"
      return "";
    }
},
    {type : "label",
        id : "Contact",
        value : "Contact info :"
    },
    {
        type : "tel",
        id : "phoneNo",
        name : "phoneNo",
        placeholder : "Enter your phoneNo..",
        required :  true,
        value : "",
        error : "",
        Validator : function(value){
           if(!value) return "PhoneNo. is required"
           const phone = /^[0-9]{10}$/
           if(!phone.test(value)) return "Enter valid phone no. and it must be 10 digits"
           return ""
        }
    },
    {
        type : "tel",
        id : "alternatePhoneNo",
        name : "alternatePhoneNo",
        placeholder : "Enter your alternate phoneNo..",
        value : "",
        error : "",
        Validator : function(value){
           if(!value) return ""
           const phone = /^[0-9]{10}$/
           if(!phone.test(value)) return "Enter valid phone no. and it must be 10 digits"
           return ""
        }
    },
    {
        type : "text",
        id : "creditcard",
        name : "creditcard",
        placeholder : "Enter your credit card No..",
        required :  true,
        value : "",
        error : "",
        Validator : function(value){
           if (!value) return "Credit card number required";
           const cardRegex = /^[0-9]{16}$/;
           if (!cardRegex.test(value)) return "Enter valid credit card number";
           if(value.length !== 16) return "Credit card number must be 16 digits"
          return "";
        }
    },
    {
        type : "file",
        id : "profilepic",
        name : "ProfilePic",
        placeholder : "Enter your Profile Pic",
        required :  true,
        value : "",
        error : "",
        Validator : function(value){
           if (!value) return "Profile pic is required";
          return "";
        }
    },
    {
        type : "file",
        id : "bannerpic",
        name : "BannerPic",
        placeholder : "Enter your Banner Pic",
        error : ""
    },
    {
        type : "password",
        id : "password",
        name : "password",
        placeholder : "Enter Password..",
        required :  true,
        value : "",
        error : "",
        Validator : function(value){
           if(!value) return "password is required"
        //    if(!(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/).test(value)) return "password must have at least 8 characters"
        // /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value)
        if(value.length < 8) return "Password must be 8 characters"
           return ""
        }
    },
    {
        type : "password",
        id : "confirmpassword",
        name : "confirmpassword",
        placeholder : "Enter password again",
        required :  true,
        value : "",
        error : "",
        Validator : function(value,allvalue){
          if(!value) return "Confirm password is required"
          if(value !== allvalue.password) return "password does not match"
          return ""
        }
    },
    {
        type : 'tags',
        id : "Hobby",
        name : "Hobby",
        value : [],
        error : "",
        placeholder : "Enter hobby"
    },
    {
        type : 'tags',
        id : "Skills",
        name : "Skills",
        value : [],
        error : "",
        placeholder : "Enter Skills",
        Validator : function(value){
            if(!value) return "Value is required"
            if(value.length<3) return "Minimum 3 tags required"
            if(value.length>20) return "Miximum 20 tags you can enter"
            return ""
        }
    }
]