const a = document.querySelectorAll('input')[0]
const b = document.querySelectorAll('input')[1]

const add = document.querySelector('#add')
const multiply = document.querySelector('#multiply')
const subtract = document.querySelector('#subtract')
const resultBox = document.querySelector('.result')

const sum = () => {
   const result = parseInt(a.value) + parseInt(b.value)
   console.log(result)
   resultBox.innerHTML = result
}
const product = () => {
   const result = parseInt(a.value) * parseInt(b.value)
   resultBox.innerHTML = result
} 
const sub = () => {
   const result = parseInt(a.value) - parseInt(b.value)
   resultBox.innerHTML = result
}

const calculator = (event ,operation) => {
//    console.log(event.target)
//    if (operation == 'add') 
//    {
//       console.log('adding')
//    }
//    else if (operation == 'multiply')
//    {
//       console.log('multiply')
//    }
// }

switch (operation) 
{
   case "add":
      resultBox.innerHTML = parseInt(a.value) + 
      parseInt(b.value)
      break
      case "multiply":
         resultBox.innerHTML =parseInt(a.value) *
         parseInt(b.value)
         break
         case "subtract":
            resultBox.innerHTML =parseInt(a.value) -
         parseInt(b.value)
         break
         default: 
         resultBox.innerHTML = "Not a valid operation"
}
}

add.addEventListener('click', (event) =>
 {
    calculator(event, 'add')
})



multiply.addEventListener('click', (event) =>
{
   calculator(event ,'multiply')
})

subtract.addEventListener('click', (event) =>
{
   calculator(event ,'subtract')
})