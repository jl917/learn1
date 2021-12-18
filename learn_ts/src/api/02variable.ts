//var
var a1:string = "hello world"
//let
let a2:string = "hello world"
//const
const a3:string = "hello world"
//解构赋值
let [first,last]:[string,string] = ["hello","world"]
let {a,b}:{a:string,b:string} = {a:'1',b:'2'}
//展开
let fd = [3,4]
let sd = [5,6]
let arr = [1,2,...fd,...sd,7]
