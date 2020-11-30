//interface não utiliza lógic, só define o que as classes que a utilizam preecisam impleemntar
export interface Daointerface {
  tableName: string

  insert(object: any): boolean
  update(object: any): boolean
  remove(id: number): any
  select(id: number): any
  selctAll(): [any]

}