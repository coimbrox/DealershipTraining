import { DealershipInterface } from './DealershipInterface'
import Car from './Car'


export default class Dealership implements DealershipInterface {
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

  public openingHours(): string {
    return 'Segunda a Sexta das 08:00 as 18:00 e aos Sábados das 08:00 as 12:00'
  }

}