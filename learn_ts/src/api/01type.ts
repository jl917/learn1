//布尔值
let _boolean: boolean = false;
//数字
let _number: number = 6;
//字符串
let _string: string = "bob";
//对象
let _object: object = {a:1}
//数组
let _list: number[] = [1, 2, 3];
let _list2: Array<number> = [1, 2, 3];
//元祖
let _tuple: [string,number] = ['dao',10]
//枚举
enum _color {Red, Green, Blue}
//Any
let _any: any = 4
//void
let _void = (message:string) => {/* balabala */}
//null
let _null:null = null
//never
let _never = (message: string): never => {throw 'err'}

//类型断言
let someValue: any = "this is a string";
let strLength1: number = (<string>someValue).length;
let strLength2: number = (someValue as string).length;

//文字类型
let _literal = (name:"aaa"|"bbb") => {}

//混合类型(联合类型) Union
let _mixin:string|number = 123

//rest参数
let _rest = (...name:string[]) => {}

//可选
let _maybe = (value?:number) => {} //null和undefined可传入

//别名
type _tson = string|number
let _tsonval:_tson = 123