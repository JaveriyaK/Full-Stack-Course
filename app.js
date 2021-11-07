var list = document.querySelector('ul')

var arr = ['Go to the GYM','cook oatmeal', 'Eat']

arr.push('complete the assignment')

for (var i=0; i< arr.length;i++)
{
   var element = document.createElement('li')
   var textnode = document.createTextNode(arr[i])
   element.appendChild(textnode)
   list.appendChild(element)
}