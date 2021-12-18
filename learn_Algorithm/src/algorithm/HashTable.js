let hashCode = key => {
    let hash = 0;
    for(let i=0;i<key.length;i++){
        hash += key.charCodeAt(i)
    }
    return hash % 37
}

class HashTable{
    constructor(){
        this.table = []
    }
    add(key,value){
        this.table[hashCode(key)] = value
    }
    remove(key){
        this.table[hashCode(key)] = undefined
    }
    has(key){
        return !!this.table[hashCode(key)]
    }
    get(key){
        if(key) return this.table[hashCode(key)]
        return this.table  
    }
    clear(){
        this.table = []
    }
    size(){
        return this.table.filter(e => {
            return e
        }).length
    }
    keys(){
        let keys = []
        this.table.forEach((e,i) => {
            e ? keys.push(i) : ''
        })
        return keys
    }
    values(){
        return this.table.filter(e => {
            return e
        })
    }
}

export default HashTable