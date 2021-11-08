// function greet(Name = 'john',age='19') 
// {
//     // console.log('Hey ' + Name + ' Your age is ' + age)
//     // console.log("Hello")
//     console.log(Name,age)
// }

// greet()

    

//    function add(a = 0,b = 0)
//    {
//       var sum=a+b
//       return sum
//    }

var add =  (a = 0,b = 0)  =>
{
    var sum=a+b
    return sum
}



console.log(add(10,20))
