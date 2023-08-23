
"use client"
import axios from 'axios'
import Link from 'next/link'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'

export default function profile(){

const router=useRouter()
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
    return(
        <div className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 flex flex-col items-center justify-center min-h-screen py-2"> 

        <strong><h1>Profile</h1> </strong>
        <hr />
        <button
        onClick={logout} 
        type="button"
        className="btn btn-primary">
           
            Logout
        </button>
        </div>
    )
}