import { Daointerface } from './Daointerface'
import Person from './Class/Person'

export class DaoPerson implements Daointerface {

  tableName: string = 'tb_person'

  insert(object: Person): boolean {
    console.log('lógica de insert')
    return true
  }

  update(object: Person): boolean {
    console.log('lógica de update')
    return true
  }

  remove(id: number): Person {
    console.log('lógica de remove/ deleete')
    return new Person('', '')
  }

  select(id: number): Person {
    console.log('lógica de select')
    return new Person('', '')
  }

  selctAll(): [any] {
    console.log('lógica de get All')
    return [new Person('', '')]
  }
}