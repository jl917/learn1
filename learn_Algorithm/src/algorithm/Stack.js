class Stack{
    constructor(){
        this.items = []
    }
    get(){
        return this.items
    }
    //添加
    add(item){
        this.items.push(item)
    }
    //移除
    remove(){
        this.items.pop()
    }
    //查看栈顶元素
    peek(){
        return this.items[this.items.length-1]
    }
    //检查栈是否为空
    isEmpty(){
        return this.items.length == 0
    }
    //栈大小
    size(){
        return this.items.length
    }
    //清空
    clear(){
        this.itmes = []
    }
}

export default Stack