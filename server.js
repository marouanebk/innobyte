require('dotenv').config()
//express app

const express =require('express')
const app = express()
const cors = require('cors');


app.use(cors());
//import mongoose
const mongoose = require('mongoose')


const port = process.env.PORT || 5000;
//import routers 
// exemple :const visitRoutes=require('./routes/visitsRoutes')
const authRoutes=require('./routes/authRoutes')
const accountRoutes=require('./routes/accountRoutes')




//middleware
app.use(express.json())
app.use((req, res,next)=>{
     console.log(req.path ,req.method)
    next()
})
 


//routes

app.use('/api/auth',authRoutes)
app.use('/api/account',accountRoutes)


//connect to db
mongoose.connect(process.env.DB_URI).then(()=>{
    //listen for requests
    app.listen(port,()=>{
        console.log('listening... ',port)
    })
}).catch((err)=>{
    console.log(err)
})
