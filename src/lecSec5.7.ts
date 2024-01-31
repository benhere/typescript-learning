
// Overriding properties & the protected Modifier in TS

class Department{
    protected empArr: string[] = [];

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

class ITDepartment1 extends Department{
    admins: string[];
    constructor(id: string, admins: string[]){
        super(id, "IT");
        this.admins = admins;
    }
}

class AccountingDepartment1 extends Department{
    constructor(id: string, private reports: string[]){
        super(id, 'Accounting');
    }

    addEmployees(name: string) {
        if(name === 'Peter'){
            return;
        }
        this.empArr.push(name);
    }

    addReport(text: string){
        this,this.reports.push(text);
    }

    printReports(){
        console.log(this.reports); 
    }
}

let itd1 = new ITDepartment1("Ac102", ["Peter", "Jack"]);
console.log(itd1);
itd1.describe();

itd1.addEmployees("Max");
itd1.addEmployees("Peter");

itd1.printEmpInfo();

const accDept1 = new AccountingDepartment1('d4', []);

accDept1.addReport('TS Report');
accDept1.addReport('Something went wrong...')

accDept1.addEmployees('Peter');
accDept1.addEmployees('TsDev');

accDept1.printEmpInfo();
accDept1.printReports();

