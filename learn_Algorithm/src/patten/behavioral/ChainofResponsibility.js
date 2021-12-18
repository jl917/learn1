/* 
定义
通过为多个对象提供处理请求的机会，避免将请求的发送者耦合到其接收者。 链接接收对象并沿链传递请求，直到对象处理它。 
代码
let craps = new Craps()
craps.getBig()
*/

class Craps{
    constructor(){
        this.count = 1
        this.get = this.get.bind(this)
    }
    get(){
        return Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + 2 
    }
    getBig(){
        let tg = this.get()
        while(tg<9){
            tg = this.get()
            this.count++
        }
        return {
            tg,
            count:this.count
        }
    }
}

export default Craps