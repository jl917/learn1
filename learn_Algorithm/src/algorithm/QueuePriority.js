class QueuePriority{
    constructor(){
        this.items = []
    }
    get(){
        return this.items
    }
    //添加
    add(data,priority=100){
        this.items.push({data,priority})
    }
    //移除
    remove(){
        let _peek = 0;
        let _priority = 0
        this.items.forEach((e,i) => {
            if(e.priority > _priority){
                _priority = e.priority
                _peek = i;
            }
        })
        this.items.splice(_peek,1)
    }
    //查看第一个元素
    peek(){
        return this.items[0]
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

export default QueuePriority