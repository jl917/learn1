let faker = require('faker')
let Mock = require('mockjs')
let Random = Mock.Random

faker.locale = 'zh_CN'


let product = length => {
    let arr = [];

    for(let i=0;i<length;i++){
        let pid = Random.integer(100000000000,999999999999)
        arr.push({
            pid,
            key: pid,
            country: faker.address.country(),
            title: Random.ctitle(6,20),
            price: Random.float(0.5,2000,2,2),
            imgUrl: faker.image.fashion(720,300),
            imgDetailUrl: [
                faker.image.fashion(720,720),
                faker.image.animals(720,720),
                faker.image.business(720,720),
                faker.image.city(720,720)
            ]
        })
    }
    return arr
}


module.exports = {
    product
}