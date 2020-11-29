export default class Car {
  private model: string
  private numberOfDoors: number
  private speed: number = 0

  //construtor

  constructor(model: string, numberOfDoors: number) {
    this.model = model
    this.numberOfDoors = numberOfDoors
  }


  // create methods whit functions

  public accelerate(): void {
    this.speed = this.speed + 10

  }

  public stop(): void {
    this.speed = 0
  }

  public currentSpeed(): number {
    return this.speed
  }
}


