import { connectdb } from "@/dbconfig/dbconfig";
import User from "@/Models/userModel";
import { NextResponse,NextRequest } from "next/server";
import bcryptjs from 'bcryptjs'
connectdb()

 export async function POST(request: NextRequest)
 {

    try{

        const reqBody=await request.json()

        const {username,password,email}=reqBody
        console.log(reqBody)
        //check is user already exists

        const user= await User.findOne({email})

        if(user)
        {
            return NextResponse.json({'User already exists'},{status:400})
        }
        
        //hash password


        const salt=await bcryptjs.genSalt(10)
    
        const hashedPassword=await bcryptjs.hash(password,salt)
    
        //SAVE USER
        const newUser=new User({
            username : username ,
            email    :  email   ,
            password:hashedPassword
        })
    
        const savedUser=await newUser.save()
        console.log(savedUser)

        return NextResponse.json({message:"user created successfully",
        success:true,
        savedUser
    
        }
        
        )

    }
    
        catch(error:any)
    {
        return NextResponse.json({error:error.message},{status:500})
    }


 }