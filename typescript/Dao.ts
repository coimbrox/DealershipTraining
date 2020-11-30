import { Daointerface } from './Daointerface'

export class Dao<T> implements Daointerface<T> {

  tableName: string = 'tb_person'

  insert(object: T): boolean {
    console.log('lógica de insert')
    return true
  }

  update(object: T): boolean {
    console.log('lógica de update')
    return true
  }

  remove(id: number): T {
    console.log('lógica de remove/ deleete')
    return Object()
  }

  select(id: number): T {
    console.log('lógica de select')
    return Object()
  }

  selctAll(): [T] {
    console.log('lógica de get All')
    return [Object()]
  }
}
