
// Working with Decorator Factories in TS 

function Logger1(logString: string){
    return function(constructor: Function){
        console.log(logString);
        console.log(constructor);
    }
}

@Logger1("logger check")
class PersonDec2{
    name = "Mike";

    constructor(){
        console.log("Creating person object....");
    }
}

const per2 = new PersonDec2();
console.log(per2);
