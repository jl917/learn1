/* 
定义
定义对象之间的一对多依赖关系，以便当一个对象更改状态时，将自动通知和更新其所有依赖项。
代码
let user1 = new User('julong')
let user2 = new User('dao')
let auction = new Auction()
user1.sendPrice(auction,12)
user2.sendPrice(auction,32)
user1.getPrice(auction)
auction.closeSell()
user2.sendPrice(auction,36)
user1.getPrice(auction)
*/
class User{
    constructor(name){
        this.name = name
    }
    sendPrice(target,price){
        target.addPrice(price)
    }
    getPrice(target){
        return target.getPrice()
    }
}

class Auction{
    constructor(){
        this.price = 0
        this.sellState = true
    }
    addPrice(price){
        this.sellState ? price > this.price ? this.price = price : '' : ''
    }
    getPrice(){
        return this.price
    }
    closeSell(){
        this.sellState = false
    }
}

export {
    User,Auction
}