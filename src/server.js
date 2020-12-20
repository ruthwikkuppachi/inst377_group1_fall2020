const express = require('express')
const app = express()
let userRoute = require('./routes/user')
let path = require('path')
let bodyParser = require('body-parser')
let db = require("./database.js")


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
 
app.use(userRoute)

app.use(express.static('public'))
const PORT = process.env.PORT || 4000

app.listen(PORT, () => console.info(`Server has started on ${PORT}`)) 