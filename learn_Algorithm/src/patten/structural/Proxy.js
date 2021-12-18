/* 
定义
为另一个对象提供代理或占位符以控制对它的访问。
*/

class Cola{
    constructor(){
        this.length = 0;
    }
    buy(length){
        this.length = this.length + length
    }
    get(){
        return this.length
    }
}

class ColaProxy{
    constructor(){
        this.buyCola = new Cola()
        this.count = 0;
    }
    buy(length){
        this.buyCola.buy(length)
        this.count++
    }
    get(){
        return this.buyCola.get()
    }
    getCount(){
        return this.count
    }
}



export {
    Cola,
    ColaProxy
}