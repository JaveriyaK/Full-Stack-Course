const data = [{name: "Javeriya"}, {name: "Anisha"},{name: "Pri"},]

const express = require('express')
const app = express()

app.get('/getNames', (req, res) =>
{
    console.log(req.url)
    res.send(data)
})


app.listen(3000, () =>
{
    console.log("Server Listening at port 3000")
})