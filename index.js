//loads .env file contacts into process.env by default
require('dotenv').config()
const express=require('express')
const cors=require('cors')
const router=require('./Routes/routes')
require('./DB/connection')

//creating server instance
const pfserver=express()

//configuring cors into server
pfserver.use(cors())

// configuring json conversion on server
pfserver.use(express.json())

// configuring routes to server
pfserver.use(router)

// serving uploaded files to client side 
pfserver.use('/uploads',express.static('./uploads'))

const PORT=3000

//calling listen method to implement listen mode for server to run 
pfserver.listen(PORT,()=>{
    console.log(`Server is running at:${PORT}`)
})

//setting response for base_url get request
pfserver.get('/',(req,res)=>{
    res.status(200).send("<h1>The get request Hit successfully</h1>")
})