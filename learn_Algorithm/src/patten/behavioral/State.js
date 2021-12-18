/* 
定义
在状态发生变化时改变对象的行为
代码
let system = new System()
let client = new Client('julong')
let sales = new Sales('sale1')
let logistics = new Logistics('l1')
client.buy(system)
sales.confirmOrder(system)
logistics.complet(system)
*/


/*
state
0 销售中
1 订单成功
2 商品转到物流
3 物流发送
*/
class System{
    constructor(){
        this.state = 0
    }
    setState(state){
        this.state = state 
    }
}

class Sales{
    constructor(){}
    confirmOrder(target){
        target.state == 1 ? target.setState(2) : ''
    }
}

class Logistics{
    constructor(){}
    complet(target){
        target.state == 2 ? target.setState(3) : ''
    }
}

class Client{
    constructor(){}
    buy(target){
        target.state == 0 ? target.setState(1) : ''
    }
}

export{
    System,
    Sales,
    Logistics,
    Client
}