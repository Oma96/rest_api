//create a server
const express = require('express')
const app = express()
const port= 5000
require('dotenv').config()
const connectDB= require('./config/connectDB')
connectDB()


//middleware
app.use(express.json())
// routes
app.use('/api/users', require('./routes/user'))

app.listen(port, (err)=>{
    err? console.log(err):console.log(`the server is up and running on ${port}`)
})
