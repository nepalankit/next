import { getDataFromToken } from "@/Helpers/getDataFromToken";
import { NextRequest,NextResponse } from "next/server";
import User from "@/Models/userModel";
import { connectdb } from "@/dbconfig/dbconfig";

connectdb()

export async function GET(request:NextRequest)
{
    try{
        const userId= await  getDataFromToken(request)
       const user= await User.findOne({_id:userId}).select("-password")
       console.log(user)
       return NextResponse.json({
        message:' User found successfully',
        user
       })
    }
    catch(error:any){
        return NextResponse.json({error:error.messgae},
            {status:400})
    }
}