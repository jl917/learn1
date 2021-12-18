/* 
定义
为子系统中的一组接口提供统一接口。 Façade定义了一个更高级别的接口，使子系统更易于使用。
代码
let s01 = new Student('julong',50)
let s01Check = new CheckScore(s01)
s01Check.result()
*/

class s1{
    constructor(){}
    get(name,score){
        return name=="julong" || score==100
    }
}

class s2{
    constructor(){}
    get(score){
        return score >= 80
    }
}

class s3{
    constructor(){}
    get(score){
        return score >= 60
    }
}

class Student{
    constructor(name,score){
        this.name = name
        this.score = score
    }
}
class CheckScore{
    constructor(student){
        this.name = student.name
        this.score = student.score
        this.message = ''
    }
    result(){
        if(new s1().get(this.name,this.score)){
            this.message = '全球旅游'
        }else if(new s2().get(this.score)){
            this.message = '挨打50大板'
        }else if(new s3().get(this.score)){
            this.message = '强制移民去印度'
        }else{
            this.message = '死刑'
        }
        return this
    }
}

export {
    Student,CheckScore
}
