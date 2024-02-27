
// readonly in TS
class Department4{
    private empArr: string[] = [];

    constructor(private readonly id: string, public name: string){
        // this.name = n;
    }

    describe(this: Department4){
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

let d4 = new Department4("Ac102", "User1");
console.log(d4);
d4.describe();

d4.addEmployees("Max");
d4.addEmployees("Peter");

d4.printEmpInfo();


