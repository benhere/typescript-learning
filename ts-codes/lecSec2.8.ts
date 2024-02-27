
// Type Alias / Custom Types in TS

type Combinable = string | number
type ConversionDescriptor = 'as-number' | 'as-text'

function combineRes(inp1: Combinable, inp2: Combinable, resConversion: ConversionDescriptor){
    let res;
    if(typeof inp1 === 'number' && typeof inp2 === 'number' || resConversion === 'as-number'){
        res = +inp1 + +inp2;
    }else{
        res = inp1.toString() + inp2.toString();
    }
    return res;
}

const combinedAges = combineRes(30,21, 'as-number');
console.log(combinedAges);

console.log(combineRes('12', '31', 'as-number'));

console.log(combineRes("Max", "Peter", 'as-text'));

