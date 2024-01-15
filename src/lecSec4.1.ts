// 'let' & 'const' in TS

let age = 29;
const s1 = 'TS';
// s1 = "JS"

function addNums(a: number, b:number){
    let res;
    res = a+b;
    console.log(age);
    return res;
}

console.log(addNums(32,12));
