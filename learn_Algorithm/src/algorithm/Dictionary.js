class Dictionary{
    constructor(){
        this.items = {}
    }

    set(key,value){
        this.items[key] = value
    }
    delete(key){
        delete this.items[key]
    }
    has(key){
        return !!this.items[key]
    }
    get(key){
        if(key) return this.items[key]
        return this.items  
    }
    clear(){
        this.items = {}
    }
    size(){
        return Object.keys(this.items).length
    }
    keys(){
        return Object.keys(this.items)
    }
    values(){
        return Object.values(this.items)
    }
}


export default Dictionary