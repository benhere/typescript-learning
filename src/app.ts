
// Inheritance in TS

class Department{
    private empArr: string[] = [];

    constructor(private readonly id: string, public name: string){
        // this.name = n;
    }

    describe(this: Department){
        console.log(`Department (${this.id}): ${this.name}`);
    }

    addEmployees(emp: string){
        this.empArr.push(emp);
    }

    printEmpInfo(){
        console.log(this.empArr.length);
        console.log(this.empArr);
    }
}

let d1 = new Department("Ac102", "User1");
console.log(d1);
d1.describe();

d1.addEmployees("Max");
d1.addEmployees("Peter");

d1.printEmpInfo();


