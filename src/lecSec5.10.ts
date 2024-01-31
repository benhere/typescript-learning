
// Abstract class in TS

abstract class DepartmentCC{
    static fiscalYear = 2024;
    protected empArr: string[] = [];

    constructor(protected readonly id: string, public name: string){
        // this.name = n;
    }

    static createEmp(name: string){
        return {name: name};
    }

    abstract describe(this: DepartmentCC): void;

    addEmployees(emp: string){
        this.empArr.push(emp);
    }

    printEmpInfo(){
        console.log(this.empArr.length);
        console.log(this.empArr);
    }
}

class ITDepartment4 extends DepartmentCC{
    admins: string[];
    constructor(id: string, admins: string[]){
        super(id, "IT");
        this.admins = admins;
    }

    describe() {
        console.log('IT Department Id: ',this.id);
    }
}

class AccountingDepartment4 extends DepartmentCC{
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

    describe(){
        console.log('Accounting Dept Id: ',+this.id);
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

const emp2 = DepartmentCC.createEmp("Henary");
console.log(emp2, DepartmentCC.fiscalYear);


let itd4 = new ITDepartment4("Ac107", ["Peter", "Jack"]);
console.log(itd4);
itd4.describe();

itd4.addEmployees("Max");
itd4.addEmployees("Peter");

itd4.printEmpInfo();

const accDept4 = new AccountingDepartment4('d6', []);

accDept4.mostRecentReport = "TS Dev Report";

accDept4.addReport('TS Report');
accDept4.addReport('Something went wrong...')

console.log(accDept4.mostRecentReport);

accDept4.addEmployees('Peter');
accDept4.addEmployees('TsDev');

// accDept4.printEmpInfo();
// accDept4.printReports();

accDept4.describe();

