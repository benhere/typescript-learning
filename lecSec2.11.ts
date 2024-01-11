
//  Functions Types & Callback

function add(n1: number, n2: number){
    return n1 + n2;
}

function printResult(): void {
    console.log('Result: '+add(32,13)); 
}
printResult();

function addAndHandle(n1: number, n2:number, cb: (num: number) => void){
    const res = n1 + n2;
    cb(res);
}

addAndHandle(32,11, (res) => {
    console.log(res);    
})
