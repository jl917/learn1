/* 
定义
享元模式（Flyweight Pattern）主要用于减少创建对象的数量，以减少内存占用和提高性能。这种类型的设计模式属于结构型模式，它提供了减少对象数量从而改善应用所需的对象结构的方式。
代码
let text01 = new TextFactory()
text01.create('hello world','red',14)
text01.create('hello world','blue',16)
text01.create('hello world','green',15)
text01.create('what the fuck~','gray',30)
text01.get()
text01.getCount()
*/

let textCount = 0
let textAttrCount = 0

class Text{
    constructor(){
        this.text = ''
    }
    add(text){
        this.text = text;
        textCount++
    }
}

class TextAttr{
    constructor(){
    }
    add(color,size){
        this.color = color;
        this.size = size;
        textAttrCount++
    }
}

class TextFactory{
    constructor(){
        this.textObj = new Text()
        this.resultText = []
    }
    create(text,color,size){
        if(this.textObj.text != text){
            this.textObj = new Text()
            this.textObj.add(text)
        }
        let textAttr = new TextAttr()
        textAttr.add(color,size)
        this.resultText.push({
            id: this.textObj.text + textAttr.color + textAttr.size,
            text: this.textObj.text,
            color: textAttr.color,
            size: textAttr.size
        })

    }

    get(){
        return this.resultText
    }

    getCount(){
        return {
            textCount,
            textAttrCount
        }
    }
}

export default TextFactory