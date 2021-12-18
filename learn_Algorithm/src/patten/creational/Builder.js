/* 
定义
将对象构造与其表示分开
代码
let starbucks = new Starbucks()
let americanoBuilder = new AmericanoBuilder()
starbucks.create(americanoBuilder)
*/
class Starbucks{
    constructor(){}
    create(builder){
        builder.step1()
        builder.step2()
        builder.step3()
        return builder.get()
    }
}

class Americano{
    constructor(){
        this.water = null;
        this.coffee = null;
    }
    addCoffee(){
        this.coffee = '20g'
    }
    addWater(){
        this.water = '400ml'
    }
}

class AmericanoBuilder{
    constructor(){
        this.drink = null;
    }
    step1(){
        this.drink = new Americano()
    }
    step2(){
        this.drink.addCoffee()
    }
    step3(){
        this.drink.addWater()
    }
    get(){
        return this.drink
    }
}

export { Starbucks, AmericanoBuilder }