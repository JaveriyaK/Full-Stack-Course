const express = require('express')
const app = express()

const PORT = 3000
// get request
app.get('/', (req, res) =>
{  
   res.send('GET')
})

app.post('/', (req, res) =>
{  
   res.send('POST')
})

app.put('/', (req, res) =>
{  
   res.send('PUT')
})

app.patch('/', (req, res) =>
{  
   res.send('PATCH')
})

app.delete('/', (req, res) =>
{  
   res.send('DELETE')
})



app.listen(PORT, () =>
{
    console.log(`Server Listening at port ${PORT}`)
})

