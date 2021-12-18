const crypto = require('crypto');
const jwt = require('jsonwebtoken')

let key = 'session_key'

let aesEncrypt = (data,key) => {
    const cipher = crypto.createCipher('aes192', key)
    let crypted = cipher.update(data, 'utf8', 'hex')
    crypted += cipher.final('hex')
    return crypted
}

let aesDecrypt = (encrypted, key) => {
    const decipher = crypto.createDecipher('aes192', key);
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}


let getToken = (data) => {
    console.log(data)
    return aesEncrypt(jwt.sign({exp: Math.floor(Date.now() / 1000) + (60 * 60),data: data}, 'jwt_key'),key)}
let checkToken = (data) =>  jwt.verify(aesDecrypt(data,key), 'jwt_key', (err,decode) =>  err ? false : decode)
let encodeSession = (uid) => aesEncrypt(uid, key)
let decodeSession = (uid) => aesDecrypt(uid, key)

module.exports = {
    getToken,
    checkToken,
    encodeSession,
    decodeSession
}
