import { connectdb } from "@/dbconfig/dbconfig";
import { NextResponse,NextRequest } from "next/server";

import User from "@/Models/userModel";
import { error } from "console";

connectdb()

export async function POST(request:NextRequest)
{

    try{
        const reqBody=request.json()
        const token=reqBody
        console.log(token)


        const user=await User.findOne({verifyToken:token,
        verifyTokenExpiry:{$gt: Date.now()}
        })

        if(!user){
            return NextResponse.json({
                error:'Invalid Token',
                status:500
            })
            console.log(user)
            //continue
        }
    }

    catch(error:any)
    {
        return NextResponse.json({error:error.message,
        status:500})
    }
}