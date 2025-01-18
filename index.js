import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import cookieParser from "cookie-parser";
import mongoose from "mongoose";


dotenv.config();

const app=express();

const port=process.env.PORT|| 3001;
const databaseUrl=process.env.DATABASE_URL;

const server=app.listen(port,()=>{
    console.log(`server.listen ${port}`);
})


app.use(cors({
    origin:[process.env.origin], //HERE FROM ANYONE CAN USE SERVER ADMIN FRONTEnd seeker frontend 
    methodd:["GET","POST","DELTE","PATCH","PUT"],
    credentials:true

}))

app.use(cookieParser());
app.use(express.json());

mongoose.connect(databaseUrl).then(()=>
console.log("database successful")
);

server;
