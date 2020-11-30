import { DaoDealership } from './DaoDealership'
import Dealership from './Class/Dealership'

import { DaoPerson } from './DaoPerson'
import Person from './Class/Person'

let dao: DaoDealership = new DaoDealership()
let dealership = new Dealership('', [])

dao.insert(dealership);

let dao2: DaoPerson = new DaoPerson()
let person = new Person('', '')

dao2.update(person)