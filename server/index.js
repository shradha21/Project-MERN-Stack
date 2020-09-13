const express = require('express')
const app = express()

const configureDB = require('./config/database')
const router = require('./config/routes')
const cors = require('cors')
const port = 3070


configureDB()//setup database

app.use(cors())

app.use(express.json()) //to parse the incoming data

app.use('/uploads',express.static('uploads'))

app.use('/api',router)

//error handling
app.use(function(err,req,res,next) {
    res.status('500').json({ error: err.message })
    next()
})


app.listen(port, () => {
    console.log('listening on port', port)
})