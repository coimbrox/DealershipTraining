import Car from './Car'


export default class Dealership {
  private Address: string
  private CarList: Array<Car>

  // constructor para instanciar objeto 

  constructor(Address: string, CarList: Array<Car>) {
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