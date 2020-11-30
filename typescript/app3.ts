import Car from './Class/Car'
import Bike from './Class/Bike'
import Dealership from './Class/Dealership'

let car = new Car('Celta', 4);
car.accelerate()
car.accelerate()


let bike = new Bike();
bike.accelerate()
bike.accelerate()


let dealership = new Dealership('', [])


console.log(bike)
console.log(car)
console.log(dealership.openingHours())