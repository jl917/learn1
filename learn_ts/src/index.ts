class Animal{
  //属性
  private name:string //私有的
  readonly age:number
  protected type:string = 'animal' 

  constructor(name,age){
    this.name = name
    this.age = age
  }

  move(move:number=0){
      console.log(`move ${move} meters`)
  }
}
class Dog extends Animal{
  
  //初始化
  constructor(name,age){    
      super(name,age)

      this.type = "dog"
  }
  //方法
  get(){
      return this
  }
  bark(){
      console.log('woof, woof')
  }
}

let a = new Dog('dao',22)
let b = new Dog('lang',33)

console.log(a)
console.log(b)

