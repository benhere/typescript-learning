
// Extending interfaces in TS

interface Named1{
    readonly name: string;
}

interface Greetable3 extends Named1 {
    readonly name: string;

    greet(phrase: string): void
}

class Person4 implements Greetable3, Named1{
    name: string;

    constructor(n: string){
        this.name = n;
    }

    age: number = 41;
    greet(phrase: string): void {
        console.log(phrase+' '+this.name);
    }
}

let user4: Greetable3

user4 = new Person4("TS_Dev");

user4.greet('Hi there - I am using TS');
console.log(user4);
