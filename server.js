const express = require('express')
const database = require('./database/db')
const app = express()
const categoryRoutes = require('./routes/categoryRoutes')

console.log(categoryRoutes.stack)

app.use(express.json())
//127.0.0.1:3001/mercedes/Routes
app.use('/category', categoryRoutes)

app.get('/', (req, res) => {
    try {
      console.log(document)
    } catch (error) {
        res.status(200).send(error.message)
    }

})


app.listen(3001, () => {
    console.log("Server Listening at port 3001")
})
