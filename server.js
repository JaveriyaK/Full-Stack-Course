const express = require('express')
const res = require('express/lib/response')
const app = express()
const PORT = 3000

const verify = (req,res,next) => 
{
   if(req.headers['user-agent'] === "Thunder Client (https://www.thunderclient.io)")
   next()
   else res.send("Blocked")
}


app.get('/', verify, (req, res) =>
{  
    res.send("Verified")
})


app.listen(PORT, () =>
{
    console.log(`Server Listening at port ${PORT}`)
})

