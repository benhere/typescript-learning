// Function Overloads in TS

type Combinable2 = string | number;
type Numeric2 = number | boolean;

type Universal1 = Combinable2 & Numeric2;

function customAdd(a: number, b: number): number;
function customAdd(n1: number, n2: string): string;
function customAdd(n1: string, n2: string): string;

function customAdd(a: Combinable2, b: Combinable2){
    if(typeof a === 'string' || typeof b === 'string'){
        return a.toString() + b.toString();
    }
    return a + b;
}

const addRes = customAdd(3,6);
console.log(addRes);
