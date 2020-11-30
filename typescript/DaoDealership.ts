import { Daointerface } from './Daointerface'
import Dealership from './Class/Dealership'

export class DaoDealership implements Daointerface {

  tableName: string = 'tb_dealership'

  insert(object: Dealership): boolean {
    console.log('lógica de insert')
    return true
  }

  update(object: Dealership): boolean {
    console.log('lógica de update')
    return true
  }

  remove(id: number): Dealership {
    console.log('lógica de remove/ deleete')
    return new Dealership('', [])
  }

  select(id: number): Dealership {
    console.log('lógica de select')
    return new Dealership('', [])
  }

  selctAll(): [any] {
    console.log('lógica de get All')
    return [new Dealership('', [])]
  }
}