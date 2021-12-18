/* 
定义
动态地将附加职责附加到对象。 装饰器为子类化提供了灵活的替代扩展功能。
代码
let user = new User('dao','1234')
let decUser = new DecoratorUser(user,'julong1988@naver.com','15526719999')
decUser.get()
*/

class User{
    constructor(name,password){
        this.name = name
        this.password = password
    }
}
class DecoratorUser{
    constructor(user,email,tel){
        this.name = user.name
        this.password = user.password
        this.email = email
        this.tel = tel
    }
    get(){
        return this
    }
}


export {
    User, DecoratorUser
}