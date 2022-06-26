const express = require('express')
const app = express()
require('dotenv').config()

const cookieParser = require('cookie-parser')


app.use(cookieParser()) 
app.use(express.json())
app.use('/users',require('./api/users') )




const connectToDB = require('./config/db')
connectToDB()

const port = process.env.host || 5000

app.listen(port, () => console.log('sever is up and running', port))