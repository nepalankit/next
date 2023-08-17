export default function userprofile({params}:any){


    return(
        <div className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 flex flex-col items-center justify-center min-h-screen py-2"> 

        <h1> profile</h1>
        <hr />
        <p className="text-4xl">Profile Page
        <span className="p-2 ml-2 rounded bg-blue-500 text-black">{params.id}</span>
        </p>
        </div>
    )
}