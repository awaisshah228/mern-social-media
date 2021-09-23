// importing library
require('dotenv').config()
const express=require('express')
const mongoose=require('mongoose')
const cors= require('cors')
const cookieParser=require('cookie-parser')

//variable
const app=express()
const port=process.env.PORT || 5000
const mongo_uri=process.env.MONGO_DB_URL

// middlewares
app.use(express.json())
app.use(cors())
app.use(cookieParser())
// database connection
mongoose.connect(mongo_uri,{ useNewUrlParser: true, useUnifiedTopology: true },err=>{
    if(err) throw err
    console.log("Connected ")
})


// routes
app.get('/',(req,res)=>{
    res.json({msg : "Hello"})
})



//listening
app.listen(port,()=>{
    console.log('Server is running on port ',port)
})


