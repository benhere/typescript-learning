
// Getters & Setters in TS

class DepartmentA{
    protected empArr: string[] = [];

    constructor(private readonly id: string, public name: string){
        // this.name = n;
    }

    describe(this: DepartmentA){
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

class ITDepartment2 extends DepartmentA{
    admins: string[];
    constructor(id: string, admins: string[]){
        super(id, "IT");
        this.admins = admins;
    }
}

class AccountingDepartment2 extends DepartmentA{
    private lastReport: string;

    get mostRecentReport(){
        if(this.lastReport){
            return this.lastReport;
        }
        throw new Error("No Report found");
    }

    set mostRecentReport(value: string){
        if(!value){
            throw new Error("Please pass in a valid value");
        }
        this.addReport(value);
    }
    
    constructor(id: string, private reports: string[]){
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    addEmployees(name: string) {
        if(name === 'Peter'){
            return;
        }
        this.empArr.push(name);
    }

    addReport(text: string){
        this,this.reports.push(text);
        this.lastReport = text;
    }

    printReports(){
        console.log(this.reports); 
    }
}

let itd2 = new ITDepartment2("Ac102", ["Peter", "Jack"]);
console.log(itd2);
itd2.describe();

itd2.addEmployees("Max");
itd2.addEmployees("Peter");

itd2.printEmpInfo();

const accDept2 = new AccountingDepartment2('d4', []);

accDept2.mostRecentReport = "TS Dev Report";

accDept2.addReport('TS Report');
accDept2.addReport('Something went wrong...')

console.log(accDept2.mostRecentReport);

accDept2.addEmployees('Peter');
accDept2.addEmployees('TsDev');

accDept2.printEmpInfo();
accDept2.printReports();

