const path = require('path')

console.log(path.extname('./app.js'))    

console.log(path.dirname('./utils.js'))

console.log(path.resolve('./app.js'))

console.log(path.relative('./', "./utils.js"))

console.log(path.join(__dirname, 'app.js'))