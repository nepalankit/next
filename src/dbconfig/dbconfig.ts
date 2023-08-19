import mongoose from "mongoose";

export async function connectdb()
{
    try{
            await mongoose.connect(process.env.MONGO_URI !)
            const connection=mongoose.connection
        
            connection.on('connected',()=>{ //.on aims to listen
                console.log("Connected to MongoDB")
        })

        connection.on('error',(err)=>{
                console.log(`Mongo DB connection error ${err}}`)
                process.exit()
        })
    }



    catch(error)
    {
            console.log('Something went wrong')
            console.log(error)
    }
}