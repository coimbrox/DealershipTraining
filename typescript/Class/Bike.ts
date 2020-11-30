import Vehicle from './Vehicle'

class Bike extends Vehicle {
  public accelerate(): void {
    this.speed = this.speed + 20

  }

}

// exportando 
export default Bike