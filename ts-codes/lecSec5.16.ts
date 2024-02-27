// Interfaces as Function types in TS

interface AddFn {
    (n1: number, n2: number): number;
}

let numAddition: AddFn;

numAddition = (n1: number, n2: number) => {
    return n1 + n2;
}

interface Named2{
    readonly name: string;
}

interface Greetable4 extends Named2 {
    readonly name: string;

    greet(phrase: string): void
}

class Person5 implements Greetable4, Named2{
    name: string;

    constructor(n: string){
        this.name = n;
    }

    age: number = 41;
    greet(phrase: string): void {
        console.log(phrase+' '+this.name);
    }
}

let user5: Greetable4

user5 = new Person5("TS_Dev");

user5.greet('Hi there - I am using TS');
console.log(user5);
