
"use client"
import axios from 'axios'
import Link from 'next/link'
import React from 'react'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'

export default function profile(){
  
    
    const router=useRouter()
    const [data,setData]=React.useState('nothing')
    const [email,setEmail]=React.useState('')

    const[username,setUserName]=React.useState('')


const logout =async()=>{
try{
    await axios.get('/api/users/logout')
    toast.success("Logout Successfull")
    router.push('/login')
}
catch(error:any)
{
    console.log(error.message)
    toast.error(error.message)
}
}
const getUserDetails = async () => {
    try {
        const res = await axios.get('/api/users/me');
        
            setData(res.data.user._id);
       
            setEmail(res.data.user.email)
            setUserName(res.data.user.username)
      
    } catch (error:any) {
        console.log(error.message);
        toast.error(error.message);
    }
};

    return(
        <div className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 flex flex-col items-center justify-center min-h-screen py-2"> 

        <strong><h1>Profile</h1> </strong>
        <hr />
        <h1 className='p-3 py-2 rounded bg-green-500'>UserID: {data==='nothing' ? 'Nothing ':<Link href={`/profile/${data}`}>
            {data}
        </Link>}</h1>
       <h1>Username :{username}</h1>
       <h1>Email :{email}</h1>


        

        <button
        onClick={logout} 
        type="button"
        className="btn btn-primary py-2 p-3 rounded bg-blue-500">
           
            Logout
        </button>
        <button
        onClick={getUserDetails} 
        type="button"
        className="btn btn-primary btn btn-primary  p-3 rounded bg-red-500">
           
            GetUserDetails
        </button>
        </div>
    )
}