let arr = []

for(let i =0; arr.length < 2000; i++){
    let n = Math.floor(Math.random()*100000+1)
    if(arr.indexOf(n) == -1){
        arr.push(n)
    }
}


console.log(arr)