
// Inheritance in TS

class DepartmentC{
    private empArr: string[] = [];

    constructor(private readonly id: string, public name: string){
        // this.name = n;
    }

    describe(this: DepartmentC){
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

class ITDepartment extends DepartmentC{
    admins: string[];
    constructor(id: string, admins: string[]){
        super(id, "IT");
        this.admins = admins;
    }
}

class AccountingDepartment extends DepartmentC{
    constructor(id: string, private reports: string[]){
        super(id, 'Accounting');
    }

    addReport(text: string){
        this,this.reports.push(text);
    }

    printReports(){
        console.log(this.reports);
        
    }
}

let itd = new ITDepartment("Ac102", ["Peter", "Jack"]);
console.log(itd);
itd.describe();

itd.addEmployees("Max");
itd.addEmployees("Peter");

itd.printEmpInfo();

const accDept = new AccountingDepartment('d4', []);

accDept.addReport('TS Report');
accDept.addReport('Something went wrong...')

accDept.printReports();

