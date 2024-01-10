
//  Functions as Types

function add(n1: number, n2: number){
    return n1 + n2;
}

function printResult(): void {
    console.log('Result: '+add(32,13)); 
}
printResult();

// let getAns: Function;
// getAns = "some value";

let getAns: (a: number, b: number) => number

getAns = add;

// getAns = printResult;

console.log(getAns(12,12));
