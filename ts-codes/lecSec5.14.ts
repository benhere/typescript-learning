
// readonly interface properties in TS

interface Greetable2 {
    readonly name: string;

    greet(phrase: string): void
}

class Person3 implements Greetable2{
    name: string;

    constructor(n: string){
        this.name = n;
    }

    age: number = 41;
    greet(phrase: string): void {
        console.log(phrase+' '+this.name);
    }
}

let user3: Greetable2;

user3 = new Person3("TS_Dev");

user3.greet('Hi there - I am using TS');
console.log(user3);
