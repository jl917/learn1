/* 
定义
请求以命令的形式包裹在对象中
代码
calculator.add(2,4,5)
calculator.sub(22,13)
calculator.mul(3,7)
calculator.div(9,3)
*/

let add = (...rest) => rest.reduce((total,num) => total+num)
let sub = (a,b) => a - b
let mul = (a,b) => a * b
let div = (a,b) => a / b


class Calculator{
    constructor(){}
    add(...rest){
        return add(...rest)
    }
    sub(a,b){
        return sub(a,b)
    }
    mul(a,b){
        return mul(a,b)
    }
    div(a,b){
        return div(a,b)
    }
}

export default Calculator