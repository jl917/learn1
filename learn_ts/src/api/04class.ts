class Animal{
    //属性
    private name:string //私有的
    protected type:string = 'animal' 
    readonly age:number

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

//存取器
class Person{
    private _name:string = 'dap'
    get name(): string{
      return this._name
    }
    set name(name:string){
      this._name = name
    }
}

let p = new Person()
console.log(p.name)
p.name = 'dddddd'
console.log(p.name)

//静态属性

//抽象类
abstract class Shirt{
    constructor(){}
    showSize(){}
    abstract setSize():void
}
class shirtA extends Shirt{
    size:any[] = []
    constructor(){
        super()
        this.size = []
    }
    setSize(...rest):void{
        this.size = rest
    }
}