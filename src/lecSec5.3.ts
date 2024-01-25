
// public & private in TS
class Department2{
    name: string;
    private empArr: string[] = [];

    constructor(n: string){
        this.name = n;
    }

    describe(this: Department2){
        console.log('Department: '+this.name);
    }

    addEmployees(emp: string){
        this.empArr.push(emp);
    }

    printEmpInfo(){
        console.log(this.empArr.length);
        console.log(this.empArr);
    }
}

let d2 = new Department("Account");
console.log(d1);
d1.describe();

d1.addEmployees("Max");
d1.addEmployees("Peter");

d1.printEmpInfo();


