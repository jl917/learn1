/* 
定义
创建多个派生类的实例
代码
let appleCreate = new AppleCreate()
appleCreate.create('iphone 7')
*/
class Apple{
    constructor(model){
        this.model = model
    }
    get(){
        return this.model
    }
}

class AppleCreate{
    constructor(){}
    create(model){
        return new Apple(model)
    }
}

export default AppleCreate