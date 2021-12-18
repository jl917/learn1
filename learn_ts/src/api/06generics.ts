//基本
function hello<T>(arg:T): T{
    return arg
}
//箭头
let _hello = <T>(arg:T): T => {
    return arg
}
//数组
function hello2<T>(arg:T[]): T{
    return arg[0]
}
//class
class hello3<T>{
    name:T
    constructor(name:T){
        this.name = name
    }
}
class hello4<T extends string | number>{
    name:T
    constructor(name:T){
        this.name = name
    }
}

//look system
interface Person{
    name:string
    age:number
}

function getProperty<T,K extends keyof T> (obj:T,key:K): T[K]{
    return obj[key]
}
function setProperty<T,K extends keyof T>(obj:T,key:K,value:T[K]): void{
    obj[key] = value
}