import mongoose from 'mongoose'
export function connectDB(url){
    mongoose.connect(url).then(()=>console.log("DataBase Connected")).catch((err)=>console.log(err))
}