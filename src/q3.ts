// 題目說明: 請建立兩個class, Animal跟Bird, Bird繼承自Animal
// Anical class說明: 有型態為string的name屬性，跟eat方法, 呼叫eat方法時請輸出 I'm {name} , I can eat~~
// Bird class說明: 有型態為string的color屬性，跟fly方法， 呼叫fly方法時請輸出 I can fly
// Bird class說明: 請複寫父類別的eat方法，呼叫Bird的eat方法時必須先印出 I override it，
//  然後再呼叫父類別的eat 輸出 I'm {name} , I can eat~~
// 最後請建立一個Bird實體，並呼叫eat跟fly方法
class Animal {
    //建構子
    constructor(
        public name: string,
        public age: number) {
    }

    eat() {
        console.log('im name',this.name, 'I can eat~~');
    }
}

class Bird extends Animal {
    //建構子
    constructor(name: string, age: number) {
        super(name, age)
    }

    fly() {
        console.log('I can fly');
    }
    eat() {
        super.eat();
        console.log(' I override it');
    }
}

let bird1 = new Bird('金絲雀', 20);
let bird2 = new Bird('燕子', 21);

//print bird1
bird1.eat()
bird1.fly()
//print bird2
bird2.eat()
bird2.fly()
