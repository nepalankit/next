
"use client"
import Link from "next/link"
import React from "react"
import { useEffect } from "react"
import {useRouter } from 'next/navigation'

import {axios} from 'axios'

export default function SignupPage()
{

    const router=useRouter()

    const [user,setUser]=React.useState({
        email:'',
        password:'',
        userName:''
    })
    const [disabledbutton, setDisabledButton]=React.useState(false)
    const [loading,setLoading]=React.useState(false)


    useEffect(()=>{
            if(user.email.length>0 && user.password.length>0 &&  user.userName.length>0)
            {
                setDisabledButton(false)
            }
            else{
                setDisabledButton(true)
            }
    },[user])
    
    const onSignup= async ()=>({
        
    })
    return(
        <div className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 flex flex-col items-center justify-center min-h-screen py-2"> 
            
            <strong>
                {loading ? 'Processing...':'Signup'}
            </strong>
                <hr/>
                <label htmlFor='username'>username</label>
                <input
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                id='username'
                type='text'
                value={user.userName}
                onChange={(e)=> setUser({
                    ...user,userName:e.target.value
                })}
                placeholder='username'
                />
         
                <hr/>
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
                <button onClick={onSignup}
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">
                   {disabledbutton ? 'please enter all the fields': 'Signup'}
                </button>
                <Link href='/login'>Don't have an account? click here</Link>
                </div>
    )
}