class Search{
    constructor(){
        this.items = []
    }

    get(){
        return this.items
    }
    sort(){
        this.items.sort((a,b)=> a-b)
    }
    randomItem(range=100000,length=2000){
        for(let i =0; this.items.length < length; i++){
            let n = Math.floor(Math.random()*range+1)
            if(this.items.indexOf(n) == -1){
                this.items.push(n)
            }
        }
    }

    //顺序查找
    sequenceSearch(value){
        let _result = {
            key:null,
            value:null
        }
        for(let i=0;i<this.items.length;i++){
            if(this.items[i] == value){
                _result.key= i;
                _result.value= value;
                return _result
            }
        }
        return _result
    }

    //二分查找
    BinarySearch(value){
        let items = this.items
        let _result = {
            count:0,
            key:null,
            value:null
        }

        let low = 0;
        let high = items.length - 1;

        while(low <= high){
            
            let mid = Math.round((high+low)/2)
            _result.count++

            if(items[mid] < value){
                low = mid+1
            }else if(items[mid] > value){
                high = mid-1
            }else{
                _result.key = mid;
                _result.value = value;
                return _result
            }
            
        }
        return _result

    }

}


export default Search