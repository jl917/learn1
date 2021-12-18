/*
union并集
intersection交集
difference差集
*/

class Collection{
    constructor(){
        this.items = {}
    }

    get(){
        return this.items
    }
    has(element){
        return element in this.items
    }
    add(element){
        element in this.items ? '' : this.items[element] = element
    }
    remove(element){
        delete this.items[element]
    }
    clear(){
        this.items = {}
    }
    size(){
        return Object.keys(this.items).length
    }

    union(object){
        let unionItems = this.items;
        Object.keys(object).forEach(element => {
            element in unionItems ? '' : unionItems[element] = element
        })
        return unionItems
    }
    intersection(object){
        let intItems = {}
        Object.keys(this.items).forEach(element => {
            Object.keys(object).forEach(element2 => {
                element == element2 ? intItems[element] = element : ''
            })
        })
        return intItems
    }
    difference(object){
        let diffItems = this.items
        Object.keys(object).forEach(element => {
            delete diffItems[element]
        })
        return diffItems
    }

}

export default Collection