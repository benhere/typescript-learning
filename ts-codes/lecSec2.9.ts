
//  Function Return Types & "void"

function add(n1: number, n2: number){
    return n1 + n2;
}

function printResult(): void {
    console.log('Result: '+add(32,13)); 
}

function printAns(num: number): undefined {
    console.log('Ans: '+add(32,33));
    return;
}

printResult();
printAns(12);