import { connectdb } from "@/dbconfig/dbconfig";
import User from "@/Models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from 'bcryptjs'

connectdb()

export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json()
        const { username, email, password } = reqBody

        console.log(reqBody);

        // Check if user already exists
        const user = await User.findOne({ email })

        if(user){
            return  NextResponse.json({ error: "User already exists" }, { status: 400 })
        }

        // Hash password
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        const newUser = new User({
            username,
            email,
            password: hashedPassword
        })

        const savedUser = await newUser.save()
        // console.log(savedUser);

        // Send verification email

        return  NextResponse.json({
            message: "User created successfully",
            success: true,
            savedUser
        })

    } catch (error: any) {
        console.error("Error while processing request:", error);
        return  NextResponse.json({ error: "An error occurred while processing your request" }, { status: 500 });
    }
    
}
