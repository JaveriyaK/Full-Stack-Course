const express = require('express')
const app = express()
const PORT = 3001

app.get('/products/cases')
app.get('/products/protection')
app.get('/products/bands')

app.get('/products/:categories', (req, res) => {
    if(req.params.categories == 'iphone') {}
    if(req.params.categories == 'Mac') {}
    if(req.params.categories == 'ipad') {}
    if(req.params.categories == 'Music') {}
    console.log(req.params)
    res.send("PING")
})




app.listen(PORT, () => {
    console.log("Server Listening at port ${PORT}")
})
