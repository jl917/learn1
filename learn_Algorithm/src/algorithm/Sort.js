
class Sort{
    constructor(){
        //this.items = []
        this.items = [1,13,24,11,11,14,1,2]
        //this.items = [1,13,24,11,11,14,1,2,2,13,24,11,11,14,1,2,2,13,24,11,11,14,1,2,2,13,24,11,11,14,1,2,2,13,24,11,11,14,1,2,2,13,24,11,11,14,1,2,2,13,24,11,11,14,1,2,2,13,24,11,11,14,1,2,2,13,24,11,11,14,1,2,2,13,24,11,11,14,1,2,2]
        //this.items = [4, 16, 9, 19, 0, 6, 2, 7]
        //this.items = [4, 16, 9]
        //this.items = []
    }

    add(item){
        this.items.push(item)
    }
    remove(position){
        this.items.splice(position,1)
    }
    get(){
        return this.items
    }
    randomItem(range=100000,length=2000){
        for(let i =0; this.items.length < length; i++){
            let n = Math.floor(Math.random()*range+1)
            if(this.items.indexOf(n) == -1){
                this.items.push(n)
            }
        }
    }

    //冒泡算法
    bubbleSort(){
        let items = this.items.map(e => e)
        let _length = items.length
        let _performance = {startTime:0,endTime:0,totalTime:0,count:0};

        _performance.startTime = new Date().getTime()
        for(let i=0; i<_length; i++){
            for(let j=0;j<_length;j++){
                _performance.count++
                items[j] > items[j+1] ? [items[j], items[j+1]] = [items[j+1], items[j]] : ''
            }
        }
        _performance.endTime = new Date().getTime()
        _performance.totalTime = _performance.endTime - _performance.startTime

        return {
            items, _performance
        }
    }
    //冒泡算法2 改进
    bubbleSort2(){
        let items = this.items.map(e => e)
        let _length = items.length
        let _performance = {startTime:0,endTime:0,totalTime:0,count:0};

        _performance.startTime = new Date().getTime()
        for(let i=0; i<_length; i++){
            for(let j=0;j<_length-i;j++){
                _performance.count++
                items[j] > items[j+1] ? [items[j], items[j+1]] = [items[j+1], items[j]] : ''
            }
        }
        _performance.endTime = new Date().getTime()
        _performance.totalTime = _performance.endTime - _performance.startTime

        return {
            items, _performance
        }
    }

    //选择排序
    selectionSort(){
        let items = this.items.map(e => e)
        let _length = items.length
        let _performance = {startTime:0,endTime:0,totalTime:0,count:0};

        _performance.startTime = new Date().getTime()
        for(let i=0;i<_length;i++){
            let _index = i;
            for(let j=i; j<_length;j++){
                items[_index] < items[j] ? '' : _index = j
                _performance.count++
            }
            [items[i], items[_index]] = [items[_index], items[i]]

        }
        _performance.endTime = new Date().getTime()
        _performance.totalTime = _performance.endTime - _performance.startTime

        return {
            items, _performance
        }
    }

    //插入排序
    insertionSort(){
        let items = this.items.map(e => e)
        let _length = items.length
        let _performance = {startTime:0,endTime:0,totalTime:0,count:0};

        _performance.startTime = new Date().getTime()

        for(let i=1;i<_length;i++){
            let wi = i
            while(wi>0){
                _performance.count++
                items[wi] < items[wi-1] ? [items[wi],items[wi-1]] = [items[wi-1],items[wi]] : ''
                wi--
            }
        }

        _performance.endTime = new Date().getTime()
        _performance.totalTime = _performance.endTime - _performance.startTime

        return {
            items, _performance
        }
    }
    //希尔排序？？？？？？
    //希尔排序是插入排序的一种更高效率的实现。它与插入排序的不同之处在于，它会优先比较距离较远的元素。希尔排序的核心在于间隔序列的设定。既可以提前设定好间隔序列，也可以动态的定义间隔序列。动态定义间隔序列的算法是《算法（第4版》的合著者Robert Sedgewick提出的。在这里，我就使用了这种方法。
    shellSort(gap){
        let items = this.items.map(e => e)
        let _length = items.length
        let _performance = {startTime:0,endTime:0,totalTime:0,count:0};

        _performance.startTime = new Date().getTime()

        //这段代码需要优化
        let getGap = gap => gap < 1 ? 0 : Math.floor(gap) > 0 ? Math.floor(gap) : _length % 2 == 0 ? _length/2 : Math.floor(_length/2 ) + 1

        let _gap = gap ? getGap(gap) : getGap(_length/2) 
        for(_gap;_gap>0;_gap=getGap(_gap/2)){
            //console.log(_gap)
            for(let i=0;i<_length-_gap;i++){
                if(items[i] > items[i+_gap]){
                    _performance.count++
                    [items[i], items[i+_gap]] = [items[i+_gap], items[i]]
                }
            }

        }
        _performance.endTime = new Date().getTime()
        _performance.totalTime = _performance.endTime - _performance.startTime

        return {
            items, _performance
        }
    }


    //归并算法 count?
    mergeSort(){
        let items = this.items.map(e => e)
        let _performance = {startTime:0,endTime:0,totalTime:0,count:0};
        
        _performance.startTime = new Date().getTime()
        
        let mergeSortMerge = (left,right) => {
            let _result = [];
            let _li = 0;
            let _ri = 0;
        
            while(_li < left.length && _ri < right.length){
                if(left[_li] < right[_ri]){
                    _result.push(left[_li++])
                }else{
                    _result.push(right[_ri++])
                }
            }
        
            while(_li < left.length){
                _result.push(left[_li++])
            }
            while(_ri < right.length){
                _result.push(right[_ri++])
            }
        
            return _result
        }
        
        let mergeSortSlice = items => {
            if(items.length < 2){
                return items
            }
            let _half = Math.floor(items.length/2)
            return mergeSortMerge(
                mergeSortSlice(items.slice(0,_half)),
                mergeSortSlice(items.slice(_half))
            )
        }
        
        items = mergeSortSlice(items)
        
        _performance.endTime = new Date().getTime()
        _performance.totalTime = _performance.endTime - _performance.startTime

        return {
            items,_performance
        } 

    }

    //快速排序
    quickSort(){}

    //堆排序
    heapSort(){}

    //计数排序
    countSort(){
    }

    //桶排序
    bucketSort(){}

    //基数排序
    radixSort(){}
}


export default Sort