const express = require('express')
const app = express()
const path = require('path')
require('dotenv').config()

const cookieParser = require('cookie-parser')


app.use(cookieParser()) 
app.use(express.json())
app.use('/users',require('./api/users') )


app.use(express.static(path.join(__dirname + "/public")))

const connectToDB = require('./config/db')
connectToDB()


const port = process.env.PORT || 5000

app.listen(port, () => console.log('sever is up and running', port))