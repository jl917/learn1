//判断输入内容是否为空
let isNull = str => {
    if(typeof str == 'string'){
        return str.trim() ? true : false
    }
    return undefined
}

//判断日期类型是否为YYYY-MM-DD
let isData = str => {
    if(typeof str == 'string'){
        let reg =  /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/
        return str.match(reg) != null ? true : false
    }
    return undefined;
}


module.exports = {
    isNull,
    isData
}