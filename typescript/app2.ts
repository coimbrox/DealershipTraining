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

// create class dealership (concessionária)

class Dealership {
  private Address: string
  private CarList: Array<Car>

  // constructor para instanciar objeto 

  constructor(Address: string, carList: Array<Car>) {
    this.Address = Address
    this.CarList = CarList
  }

  public ProvideAddress(): string {
    return this.Address
  }

  public ShowCarList(): Array<Car> {
    return this.CarList
  }
}

//create class person
class Person {
  private Name: string
  private FavoriteCar: string
  private Car: any

  // create constructor
  constructor(Name: string, FavoriteCar: string) {
    this.Name = Name
    this.FavoriteCar = FavoriteCar
  }

  // create methods
  public SayName(): string {
    return this.Name
  }

  public SayFavoriteCar(): string {
    return this.FavoriteCar
  }

  public BuyCar(car: any): void {
    this.Car = Car
  }

  public SayCarHave(): any {
    return this.Car
  }
}

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
console.log(dealership.ShowCarList())