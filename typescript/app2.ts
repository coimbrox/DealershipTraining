import Car from './Class/Car'
import Person from './Class/Person'
import Dealership from './Class/Dealership'




/* --- Create Cars ---*/

let car1 = new Car('Corsa', 4)
let car2 = new Car('Celta', 4)
let car3 = new Car('Uno', 2)

/* --- Create Car List From Dealership--- */
// poderia ser passado Array<Car> = [car1,car2,car3]
let CarList: Car[] = [
  car1,
  car2,
  car3
]

// atribuir lista de carros a concessionária 

let dealership = new Dealership('Mussurunga 2', CarList)


/* -- show car list --*/
// console.log(dealership.ShowCarList())


/** buy a car */

let client = new Person('Volca', 'Corsa')

dealership.ShowCarList().map((car: Car) => {

  if (car['model'] == client.SayFavoriteCar()) {

    // if true - buy car

    client.BuyCar(car)

  }

})

console.log(client.SayCarHave())