
// Using interface with class in TS

interface Greetable {
    name: string;

    greet(phrase: string): void
}

class Person2 implements Greetable{
    name: string;

    constructor(n: string){
        this.name = n;
    }

    age: number = 41;
    greet(phrase: string): void {
        console.log(phrase+' '+this.name);
    }
}

let user2: Greetable;

user2 = new Person2("TS_Dev");

user2.greet('Hi there - I am using TS');
console.log(user2);
