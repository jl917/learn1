Array.prototype.bianli = function(fn){
    for(let i=0;i<this.length;i++){
        fn.call({},this[i],i,this)
    }
    
    return fn
}


let arr = [3,2,1]

arr.bianli((e,i,a) => {
    console.log({
        e,i,a
    })
})