let car = {
    name : "C Class",
    manufacturer : "Mercedes",
    print : () => 
    {
     console.log(`${car.name} was created by ${car.manufacturer}`)
    }
}

console.log(car)

console.log(car.hasOwnProperty('manufacturer'))