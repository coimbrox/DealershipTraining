// create class Car
class Car {
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

// instanciar obj

// let car1 = new Car('Veloster', 3)
// console.log(car1)

// //execute method
// car1.accelerate()
// console.log(car1)

// create class dealership (concessionária)

class Dealership {
  private Address: string
  private CarList: any

  // constructor para instanciar objeto 

  constructor(Address: string) {
    this.Address = Address
  }

  public ProvideAddress(): string {
    return this.Address
  }

  public ShowCarList(): any {
    return this.CarList
  }
}

let dealership = new Dealership("Rua Desembargador Wilde de Lima");
console.log(dealership)
