import { Daointerface } from './Daointerface'
import Bike from './Class/Bike'

export class DaoBike implements Daointerface {

  tableName: string = 'tb_bike'

  insert(object: Bike): boolean {
    console.log('lógica de insert')
    return true
  }

  update(object: Bike): boolean {
    console.log('lógica de update')
    return true
  }

  remove(id: number): Bike {
    console.log('lógica de remove/ deleete')
    return new Bike()
  }

  select(id: number): Bike {
    console.log('lógica de select')
    return new Bike()
  }

  selctAll(): [any] {
    console.log('lógica de get All')
    return [new Bike()]
  }
}