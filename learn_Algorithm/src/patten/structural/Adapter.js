/* 
定义
匹配不同类的接口
代码
let martAdapter = new MartAdapter()
//old
martAdapter.getPrice('cola',5)
//new
martAdapter.getTotalPrice({type:'cola',length:3},{type:'bread',length:2})

*/

// old api
class Mart{
    constructor(){
        this.cola = 3
        this.bread = 5
    }
    getPrice(type,num){
        return this[type] * Math.floor(num)
    }
}

// new api
class NewMart{
    constructor(){
        this.cola = 3
        this.bread = 5
    }
    getTotalPrice(...rest){
        let _result = 0;
        rest.forEach(e => {
            _result += this[e.type] * e.length
        })
        return _result
    }
}

//adapter
class MartAdapter{
    constructor(){}

    getPrice(type,num){
        return new Mart().getPrice(type,num)
    }

    getTotalPrice(...rest){
        return new NewMart().getTotalPrice(...rest)
    }
}



export {
    Mart,
    NewMart,
    MartAdapter
}