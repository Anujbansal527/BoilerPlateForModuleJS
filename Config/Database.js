import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const URL = process.env.DB_URL

const Database = async () =>{
    await mongoose.connect(URL,{})
    .then(()=> console.log("Successfully Connected to Database"))
    .catch((error) => console.log(error))
}

export default Database;