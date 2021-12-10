const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((request, response) => {
    const {url}  = request
    if(url == '/login')
    {
        response.write('<h1>LOGIN</h1>')
        response.end()
    }

    if(url == '/signup')
    {
        response.write('<h1>SIGNUP</h1>')
        response.end()
    }
    })

    server.listen(3000, () => {
             console.log(`Server listening at PORT: ${3000}`)
     })





//     // request.url
//     // console.log(request.headers)
//     var i = path.join(path.resolve(),'index.html')
//     console.log(i)
//     // console.log(path.join(path.resolve(),'index.html'))
//     const markup = fs.readFileSync(i)
//     response.write(markup)
//     response.end()
// })


// server.listen(3000, () => {
//     console.log(`Server listening at PORT: ${3000}`)
// })

// console.log('A message')  
// //  console.log('Another message') 