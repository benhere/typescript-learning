// Interface in TS

interface Person1 {
    name: string;
    age: number;

    greet(phrase: string): void
}

let user1: Person1;

user1 = {
    name: 'Peter',
    age: 27,
    
    greet(phrase: string){
        console.log(phrase+ ' '+this.name);
    }
};

user1.greet('Hi there - I am using TS');