
// Building more useful Decorators in TS 

function Logger2(logString: string){
    return function(constructor: Function){
        console.log(logString);
        console.log(constructor);
    }
}

function WithTemplate(template: string, hookId: string){
    return function(constructor: Function){
        const hookEle = document.getElementById(hookId);
        if(hookEle){
            hookEle.innerHTML = template;
        }
    }
}

// @Logger2("logger check")
@WithTemplate('ran', 'app')
class PersonDec3{
    name = "Mike";

    constructor(){
        console.log("Creating person object....");
    }
}

const per3 = new PersonDec3();
console.log(per3);
