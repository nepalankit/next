import { connectdb } from "@/dbconfig/dbconfig";
import User from "@/Models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from 'bcryptjs'

connectdb()

export async function POST(request:NextRequest) {



    try{
            const reqbody=await request.json()
            const {email,password}=reqbody
            console.log(reqbody)

            // check if user exists
            const user=await User.findOne({email})
            if(!user)
            {
                return NextResponse.json("NO user matched!! please enter correct credentials")
            }
                // check if password is correct

                const checkPassword=await bcryptjs.compare(password,user.password) //checking from reqbody i.e. frontend and from DB
                if(!checkPassword)
                {
                    return NextResponse.json({message:"Invalid password"},{status:500})
                }

            }


    catch(error:any)
    {
        return NextResponse.json({error:error.message},{status:500})
    }
    
}