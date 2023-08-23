import { NextResponse } from "next/server";


export async function GET(){
    try{
            const response=NextResponse.json({
                message:"logout successfull",
                status:true
            })
            response.cookies.set("token",'',{ 
                //remove cookies for logout
                httpOnly:true,
                expires: new Date(0)
            })
            return response
    }
    catch(error:any)
    {
        return NextResponse.json({error: error.message},{status: 500})
    }
}