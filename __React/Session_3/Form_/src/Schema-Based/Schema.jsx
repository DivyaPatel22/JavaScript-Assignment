import {z} from 'zod'

export const Schema = z.object({
    name : z.string({required_error: "Name is required"}).min(3,'Name must have minimum 3 characters'),
    age : z.number({required_error: "Age is required"}).min(1,'Minimun age should be 1').max(80,'Maximum age should be 80'),
    email : z.string().email("Invalid Email"),
    birthdate : z.date(),
    gender: z.enum(["male", "female", "other"], { required_error: "Select gender" }),
    fatherName: z.string().optional(),
    motherName: z.string().optional(),
    maritalStatus: z.string().min(1, "Select marital status"),
    phone: z.string().regex(/^[0-9]{10}$/, "Phone number must be 10 digits"),
    alternatePhone: z.string().regex(/^[0-9]{10}$/, "Alternate phone must be 10 digits").optional().or(z.literal("")),
    creditcard: z.string().regex(/^[0-9]{16}$/, "Credit card must be 16 digits"),
    profilepic: z.any(),
    bannerpic: z.any().optional(),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string()
})
.superRefine((data,ctx)=>{
    if(data.gender === "male"){
        if(!data.fatherName){
            ctx.addIssue({
                path:['fatherName'],
                message :"Father Name is required for male.",
                code : z.ZodIssueCode.custom
            })
        }
    }


    if(data.gender === "female"){
        if(!data.motherName){
            ctx.addIssue({
                path:['motherName'],
                message :"Mother Name is required for Female.",
                code : z.ZodIssueCode.custom
            })
        }
    }


    if (data.password !== data.confirmPassword) {
        ctx.addIssue({
        path: ["confirmPassword"],
        message: "Passwords do not match",
        code: z.ZodIssueCode.custom
        });
    }
})
