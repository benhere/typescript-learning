
// shorthand intialization in TS
class Department3{
    private empArr: string[] = [];

    constructor(private id: string, public name: string){
        // this.name = n;
    }

    describe(this: Department3){
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

let d3 = new Department3("Ac102", "User1");
console.log(d3);
d3.describe();

d3.addEmployees("Max");
d3.addEmployees("Peter");

d3.printEmpInfo();


