
// Optional Parameters & Properties in TS

interface AddFn1 {
    (n1: number, n2: number): number;
}

let numAddition1: AddFn1;

numAddition1 = (n1: number, n2: number) => {
    return n1 + n2;
}

interface Named3{
    readonly name: string;
    outputName?: string; // optional parameter
}

interface Greetable5 extends Named3 {
    readonly name: string;

    greet(phrase: string): void
}

class Person6 implements Greetable5, Named3{
    name: string;

    constructor(n: string){
        this.name = n;
    }

    age: number = 41;
    greet(phrase: string): void {
        console.log(phrase+' '+this.name);
    }
}

let user6: Greetable5

user6 = new Person6("TS_Dev");

user6.greet('Hi there - I am using TS');
console.log(user6);
