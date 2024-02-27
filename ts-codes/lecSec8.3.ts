
// Adding Multiple Decorators in TS 

/*
function Logger2(logString: string){
    console.log('Logger Factory');
    return function(constructor: Function){
        console.log(logString);
        console.log(constructor);
    }
}

function WithTemplate(template: string, hookId: string) {
  console.log("Template Factory");
  return function<T extends { new(...args: any[]): { name: string }}> (originalConstructor: T) {
    return class extends originalConstructor {
      constructor(...args: any[]) {
        super();
        console.log("Rendering template");
        const hookEle = document.getElementById(hookId);
        if (hookEle) {
          hookEle.innerHTML = template;
        }
      }
    };
  };
}

@Logger2("logger check")
@WithTemplate('<h2>random text</h2>', 'app')
class PersonDec3{
    name = "Mike";

    constructor(){
        console.log("Creating person object....");
    }
}

const per3 = new PersonDec3();
console.log(per3);

// more example

function logLines1(target1: any, propertyName: string | Symbol){
    console.log("Property decorator:");
    console.log(target1, propertyName);
}

function logLines2(target2: any, name: string, desc: PropertyDescriptor){
    console.log("Accessor Decorator");
    console.log(target2);
    console.log(name);
    console.log(desc); 
}

function logLines3(target3: any, name: string | Symbol, descriptor: PropertyDescriptor){
    console.log("Method Decorator");
    console.log(target3);
    console.log(name);
    console.log(descriptor); 
}

function logLines4(target4: any, name: string | Symbol, position: number){
    console.log("Parameter Decorator!");
    console.log(target4);
    console.log(name);
    console.log(position); 
}

class Product1{
    @logLines1
    title: string;
    private _price: number

    @logLines2
    set priceSetter(val: number){
        if(val > 0){
            this._price = val;
        }else{
            throw new Error("Invalid price - should be positive");
        }
    }

    constructor(t: string, p:number){
        this.title = t;
        this._price = p;
    }

    @logLines3
    getPriceWithTax(@logLines4 tax: number){
        return this._price * (1 + tax);
    }
}

const p2 = new Product1("Book1", 21);
const p3 = new Product1("Book2", 31);
*/

/*
function Autobind(target: any, methodName: string, descriptor: PropertyDescriptor){
    const originalMethod = descriptor.value;
    
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get(){
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjDescriptor;
}

class Printer1{
    message = "This works!";

    @Autobind
    showMessage(){
        console.log(this.message);
    }
}

const pr1 = new Printer1();
const button = document.querySelector('button')!;
button.addEventListener('click', pr1.showMessage);
*/

// Decorator for validation

// create own decorator for validation

interface ValidatorConfig{
    [property: string]: {
        [validatableProps: string]: string[];
    }
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string){
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? []), 'required']
    };
}

function PositiveNumber(target: any, propName: string){
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? []), 'positive']
    };
}

function validate(obj: any){
    const objValidatorsConfig = registeredValidators[obj.constructor.name]
    if(!objValidatorsConfig){
        return true;
    }
    let isValid = true;
    for(const prop in objValidatorsConfig){
        console.log(prop);
        for(const validator of objValidatorsConfig[prop]){
            switch(validator){
                case 'required':
                    isValid = isValid && !!obj[prop];
                    break;
                case 'positive':
                    isValid = isValid && obj[prop] > 0;
                    break;
            }
        }
    }
    return isValid;
}

class Course{
    @Required
    title: string;
    @PositiveNumber
    price: number;

    constructor(t: string, p:number){
        this.title = t;
        this.price = p;
    }
}

const courseForm = document.querySelector("form")!;
courseForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const titleEle = document.getElementById("title") as HTMLInputElement;
    const priceEle = document.getElementById("price") as HTMLInputElement;
    
    const cTitle = titleEle.value;
    const cPrice = +priceEle.value;

    const cObj1 = new Course(cTitle, cPrice);
    
    if(!validate(Course)){
        alert('Please enter valid inputs');
        return;
    }

    console.log(cObj1);
})
