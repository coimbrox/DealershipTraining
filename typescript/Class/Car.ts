import Vehicle from './Vehicle'

export default class Car extends Vehicle {
  private numberOfDoors: number
  //construtor

  constructor(model: string, numberOfDoors: number) {
    super()
    this.model = model
    this.numberOfDoors = numberOfDoors
  }
}