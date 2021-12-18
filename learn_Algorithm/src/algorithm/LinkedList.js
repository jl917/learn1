/*
1. 康加舞队
2. 寻宝游戏， 一条线索指向另一条线索
3. 火车
*/

class Node{
    constructor(element){
        this.element = element
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.length = 0
    }
    add(element){
        let _node = new Node(element)
        if(this.head){
            let current = this.head
            while(current.next){
                current = current.next
            }
            current.next = _node
        }else{
            this.head = _node
        }
        this.length++
    }
    remove(position){

        if(position < 0 || position > this.length -1|| !this.head){
            console.log('error')
            return '错误'
        }

        let _index = 0;
        let _current = this.head
        let _previous

        if(position == 0){
            this.head = _current.next
        }else{
            while(_index<position){
                _previous = _current
                _current = _current.next
                _index++
            }
            _previous.next = _current.next
        }
        this.length--   
    }
    insert(position,element){
        if(position < 0 || position > this.length -1|| !this.head){
            console.log('error')
            return '错误'
        }
        let _node = new Node(element)
        let _index = 0;
        let _current = this.head
        let _previous;

        if(position == 0){
            _node.next = this.head
            this.head = _node
        }else{
            while(_index<position){
                _previous = _current
                _current = _current.next
                _index++
            }

            _previous.next = _node
            _node.next = _current
            
        }
        this.length++
    }

    indexOf(element){
        let _index = 0;
        let _current = this.head
        while(_index<this.length){
            if(element == _current.element){
                return _index
            }
            _current = _current.next
            _index++
        }
        return -1
    }

    get(){
        return {
            head: this.head,
            length: this.length
        }
    }
}

export default LinkedList
/*
链表添加元素
链表删除特定位置元素
任意位置添加元素
indexOf

双向链表
循环链表
*/