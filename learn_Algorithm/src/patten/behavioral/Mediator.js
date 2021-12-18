/* 
定义
定义类之间的简化通信
代码
let user1 = new User('julong','23')
let user2 = new User('dao','32')
let devRoom = new ChatRoom('devroom')
user1.sendMessage(devRoom,'hello')
user1.sendMessage(devRoom,'hi~  what')
user2.sendMessage(devRoom,'halou ju long ')
devRoom.showMessage()
*/

class User{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    sendMessage(target,message){
        target.addMessage(this.name,message)
    }
}

class ChatRoom{
    constructor(crname){
        this.crname = crname
        this.message = []
    }
    addMessage(name,message){
        this.message.unshift({name,message})
    }
    showMessage(){
        return this.message
    }
}
export {
    User,ChatRoom
}