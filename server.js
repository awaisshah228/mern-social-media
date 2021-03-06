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
app.use(cors({
    origin : ["http://localhost:3000"],
    credentials : true
}))
app.use(cookieParser())
app.use(express.json())
// database connection
mongoose.connect(mongo_uri,{ useNewUrlParser: true, useUnifiedTopology: true },err=>{
    if(err) throw err
    console.log("Connected ")
})


// routes
app.get('/',(req,res)=>{
    res.json({msg : "Hello"})
})
app.post('/',(req,res)=>{
    console.log(req.body.email)
    res.json({msg: "hi"})
})
app.use('/api',require('./routes/authRouter'))
app.use('/api',require('./routes/userRouter'))
app.use('/api', require('./routes/postRouter'))





//listening
app.listen(port,()=>{
    console.log('Server is running on port ',port)
})


