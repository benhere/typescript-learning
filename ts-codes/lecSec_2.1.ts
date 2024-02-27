
function add(n1:number, n2:number, showRes:boolean, phrases:string){
    const res = n1+n2;
    if(showRes){
        console.log(phrases + res);
    }else{
        return res;
    }
}

const n1 = 32;
const n2 = 22.1;
const printRes = true;
const resPhrase = 'Result is:'

add(n1,n2,printRes,resPhrase);

