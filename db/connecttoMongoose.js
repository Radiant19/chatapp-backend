import mongoose from "mongoose";
import dotenv from "dotenv";

const Connection  = async () => {
try {
   await mongoose.connect(process.env.MONGO_DB_URL) ;
   console.log("SUccesfully connected to mongodb")
} catch (error) {
    console.log(error)
    console.log("error in connection to mongodb")    
}
}

export default Connection;