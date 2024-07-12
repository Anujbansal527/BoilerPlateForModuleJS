//to use common js syntex with module js
import { createRequire } from 'module';
// Create a require function
const require = createRequire(import.meta.url);
//const cors = require("cors").config();


import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import Database from './Config/Database.js';
import router from './Routes/Example-Rooutes.js';


const app = express()

const PORT = process.env.PORT

dotenv.config();

app.use(cors())

app.use(express.json())

app.use("/api",router)

Database()

app.listen(PORT,()=> {
    console.log(`Sucessfully connected to PORT ${PORT}`)
})