import { DaoDealership } from './DaoDealership'
import Dealership from './Class/Dealership'

import { DaoPerson } from './DaoPerson'
import Person from './Class/Person'

import { DaoCar } from './DaoCar'
import Car from './Class/Car'

import { DaoBike } from './DaoBike'
import Bike from './Class/Bike'


//Dealership
let dao: DaoDealership = new DaoDealership()
let dealership = new Dealership('', [])

dao.insert(dealership);

// Person
let dao2: DaoPerson = new DaoPerson()
let person = new Person('', '')

dao2.update(person)

// Car
let dao3: DaoCar = new DaoCar()
let car = new Car('', 4)

dao2.remove(car)

// Bike
let dao4: DaoBike = new DaoBike()
let bike = new Bike()

dao2.select(bike)