const data = [{name: "Javeriya"}, {name: "Anisha"},{name: "Pri"},]

const express = require('express')
const app = express()

app.get('/login', (req, res) =>
{
    console.log(req.url)
    res.send('This is signup')
})

app.get('/signup', (req, res) =>
{
    console.log(req.url)
    res.send('This is SIGNUP')
})

app.listen(3000, () =>
{
    console.log("Server Listening at port 3000")
})