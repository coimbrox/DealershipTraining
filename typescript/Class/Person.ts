import Car from './Car'

export default class Person {
  private Name: string
  private FavoriteCar: string
  private Car: car


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

  public BuyCar(Car: Car): void {
    this.Car = Car
  }

  public SayCarHave(): Car {
    return this.Car
  }
}