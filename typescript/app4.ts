import { Dao } from './Dao'

// import { DaoDealership } from './DaoDealership'
import Dealership from './Class/Dealership'

// import { DaoPerson } from './DaoPerson'
import Person from './Class/Person'

// import { DaoCar } from './DaoCar'
import Car from './Class/Car'

// import { DaoBike } from './DaoBike'
import Bike from './Class/Bike'


//Dealership
// let dao: DaoDealership = new DaoDealership()
let dealership = new Dealership('', [])

// Person
// let dao2: DaoPerson = new DaoPerson()
let person = new Person('', '')

// Car
// let dao3: DaoCar = new DaoCar()
let car = new Car('', 4)

// Bike
// let dao4: DaoBike = new DaoBike()
let bike = new Bike()

let dao5: Dao<Dealership> = new Dao<Dealership>()
let dao6: Dao<Person> = new Dao<Person>()

dao5.insert(Dealership)
dao6.remove(5)