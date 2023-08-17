
"use client"
import Link from "next/link"
import React from "react"

import {useRouter } from 'next/navigation'

import {axios} from 'axios'

export default function LoginPage()
{
    const [user,setUser]=React.useState({
        email:'',
        password:'',
        
    })

    const onLogin= async ()=>({

    })
    return(
        <div className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 flex flex-col items-center justify-center min-h-screen py-2"> 
            
            <strong>
               Login
            </strong>
               
          
                <label htmlFor='email'>email</label>
                <input
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                id='email'
                type='text'
                value={user.email}
                onChange={(e)=> setUser({
                    ...user,email:e.target.value
                })}
                placeholder='email'
                />
                <hr/>
                <label htmlFor='password'>password</label>
                <input
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                id='password'
                type='password'
                value={user.password}
                onChange={(e)=> setUser({
                    ...user,password:e.target.value
                })}
                placeholder='password'
                />
                <button onClick={onLogin}
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">
                    Signup
                </button>
                <Link href='/Signup'>Already have an account? click here</Link>
                </div>
    )
}