const express = require('express')
const database = require('./database/db')
const app = express()
const categoryRoutes = require('./routes/categoryRoutes')


app.use(express.json())

app.use('/category', categoryRoutes)




app.listen(3001, () => {
    console.log("Server Listening at port 3001")
})
