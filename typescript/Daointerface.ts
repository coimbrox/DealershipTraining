//interface não utiliza lógic, só define o que as classes que a utilizam preecisam impleemntar
export interface Daointerface<T> {
  tableName: string

  insert(object: T): boolean
  update(object: T): boolean
  remove(id: number): T
  select(id: number): T
  selctAll(): [T]

}