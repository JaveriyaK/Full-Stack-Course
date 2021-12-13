const express = require('express')
const app = express()
const category_Routes = require('./routes/categoryRoutes')

const productRoutes = require('./routes/productRoutes')


app.use(express.json())

app.use('/category', categoryRoutes)
app.use('/products', productRoutes)




app.listen(3001, () => {
    console.log("Server Listening at port 3001")
})
