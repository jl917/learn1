//普通接口
interface user {
    name: string,
    age: number,
    readonly password: string, //只读属性
    email?: string //可选属性

    [propName: string]: any; //跳过未定义属性检查
}

let user1: user = {
    //id: 'c002p0001'  默认未定义抛出错误
    name: 'dao',
    age: 12,
    password: '123456', //只读
    email: 'julong@naver.com' //可有可无
}

//函数接口
interface addUser {
    (name: string, age: number): object
}
let adduser:addUser = (name,age) => ({name,age})

//可索引的类型
interface _array{
    [key:number] : string
}
let myArray:_array = ["Bob", "Fred"];
let myObj: _array = {
    "1":'dao'
}

//类类型
interface ClockInterface {
    currentTime: String,
    setTime(d: String)
}

class Clock implements ClockInterface {
    currentTime: String;
    setTime(d: String) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) {}
}

//类静态部分与实例部分???????????



//继承接口
interface Shape{
    color: string
}
interface important{
    weight: number
}
interface Square extends Shape,important{
    sideLength: number
}
let square1:Square = {
    color: 'red',
    sideLength: 10,
    weight: 5
}
let square2 = <Square>{}

//混合类型？？？？？？？？？？
//接口继承类？？？？？？？？