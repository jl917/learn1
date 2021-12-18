/* 
定义
将算法封装在类中
代码
let market1 = new Shop(new Market1())
let market2 = new Shop(new Market2())
market1.caculate({name: 'cola',length: 3})
market2.caculate({name: 'cola',length: 3})
*/

class Market1{
    constructor(){
        this.products = {
            cola: {
                price: 3,
                length: 20
            }
        }
    }

    caculate(obj){
        return this.products[obj.name].price * obj.length
    }
}

class Market2{
    constructor(){
        this.products = {
            cola: {
                price: 2.5,
                length: 20
            }
        }
    }

    caculate(obj){
        return this.products[obj.name].price * obj.length
    }
}

class Shop{
    constructor(market){
        this.market = market
    }
    
    caculate(obj){
        return this.market.caculate(obj)
    }
}

export {
    Shop, Market1, Market2
}