const path = require('path')

console.log(path.resolve('./app.js'))    //absolute path

console.log(path.relative('/', "./app.js"))    //relative path