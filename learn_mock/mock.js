// 使用 Mock
let Mock = require('mockjs')
let Random = Mock.Random


let getData = length => {
    let arr = [];

    for(let i=0;i<length;i++){
        arr.push({
            pid: Random.integer(100000000000,999999999999),
            title: Random.ctitle(6,20),
            price: Random.float(0.5,2000,2,2),
            imgUrl: Random.image('200x100', '#00405d', '#FFF', 'Mock.js')
        })
    }
    return arr
}

console.log(getData(2))