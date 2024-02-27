// A first class Decorators in TS 

function Logger(constructor: Function){
    console.log('logging....');
    console.log(constructor);
}

@Logger
class PersonDec1{
    name = "Mike";

    constructor(){
        console.log("Creating person object....");
    }
}

const per1 = new PersonDec1();
console.log(per1);
