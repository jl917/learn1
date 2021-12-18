/**
 add 
has
min
max
remove
*/

let compare = (e1,e2) => {
    let _res
    if(e1 == e2) return false
    e1 > e2 ? _res = 'left' : _res = 'right'
    return _res
}

class Node{
    constructor(element){
        this.element = element
        this.left = null
        this.right = null
    }
}

class TreeBinarySearch{
    constructor(){
        this.root = null;
    }
    add(element){
        let node = new Node(element)
        if(!this.root){
            this.root = node
        }else{
            let _current = this.root
            let _compare = compare(_current.element,node.element)

            while(_current[_compare]){
                _current = _current[_compare]
                _compare = compare(_current.element,node.element)
            }
            _compare ? _current[_compare] = node : ''
        }
        
    }
    has(element){
        if(!this.root) return false
        if(this.root.element == element) return true

        let _current = this.root
        let _compare = compare(_current.element,element)
        
        while(_current[_compare]){
            _current = _current[_compare]
            if(_current.element == element) return true
            _compare = compare(_current.element,element)
        }

        return false
        
        
    }
    min(){
        let _current = this.root
        while(_current.left){
            _current = _current.left
        }
        return _current.element
    }
    max(){
        let _current = this.root
        while(_current.right){
            _current = _current.right
        }
        return _current.element
    }
    remove(){
        
    }
    get(){
        console.log(this.root)
    }
}


export default TreeBinarySearch