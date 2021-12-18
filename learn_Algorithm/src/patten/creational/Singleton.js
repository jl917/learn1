/* 
定义
确保一个类只有一个实例，并提供一个全局访问点。
代码
Singleton1.get()
Singleton2()
*/

//普通单体
let Singleton1 = {
    name:"Apple",
    get(){
        return this.name;
    }
}

//有局部变量的单体
let Singleton2 = () => {
    let _name = "apple";
    let _color = "red";
    return {
        name: _name,
        color: _color
    }
}


export {
    Singleton1,Singleton2
}