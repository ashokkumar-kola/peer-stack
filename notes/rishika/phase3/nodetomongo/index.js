// import mongoose from 'mongoose'
const mongoose = require("mongoose");
const express = require("express");
const app = express()
app.use(express.json())
// mongoose.connect('127.0.0.1:mongodb/mydb')
mongoose.connect('mongodb://localhost:27017/mydb').then(()=>{
    console.log('connected to mongo')
}).catch((err)=>{
    console.log("Error",err)
})

app.get("/",(req,res)=>{
    res.send("hello world") //terminal postman
    res.write("hello world") //screen
})

/*
schema define
model
operations
*/

const userSchema= new mongoose.Schema({
    name:String,
    email:String,
    role:String
})

const userModel = mongoose.model('user',userSchema)

// app.post("/addUser",(req,res)=>{

//     const body= req.body
//     console.log(body);

//     res.send("user added")

// })

userModel.find({}).then((data)=>{
    console.log("Data",data)
}).catch((err)=>{
    console.log("error",err);
    
})

app.listen(3000,()=>{
    console.log("server running at port 3000");
    
})

userModel.create({name:"Rishika", email:"rishi@gmail.com", role:"developer"}).then(()=>{
    console.log("user inserted")
})
