import { Daointerface } from './Daointerface'
import Car from './Class/Car'

export class DaoCar implements Daointerface {

  tableName: string = 'tb_car'

  insert(object: Car): boolean {
    console.log('lógica de insert')
    return true
  }

  update(object: Car): boolean {
    console.log('lógica de update')
    return true
  }

  remove(id: number): Car {
    console.log('lógica de remove/ deleete')
    return new Car('', 4)
  }

  select(id: number): Car {
    console.log('lógica de select')
    return new Car('', 4)
  }

  selctAll(): [any] {
    console.log('lógica de get All')
    return [new Car('', 4)]
  }
}