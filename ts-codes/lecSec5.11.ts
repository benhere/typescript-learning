
// Singletons & Private Constrctors in TS

abstract class DepartmentDD{
    static fiscalYear = 2024;
    protected empArr: string[] = [];

    constructor(protected readonly id: string, public name: string){
        // this.name = n;
    }

    static createEmp(name: string){
        return {name: name};
    }

    abstract describe(this: DepartmentDD): void;

    addEmployees(emp: string){
        this.empArr.push(emp);
    }

    printEmpInfo(){
        console.log(this.empArr.length);
        console.log(this.empArr);
    }
}

class ITDepartment5 extends DepartmentDD{
    admins: string[];
    constructor(id: string, admins: string[]){
        super(id, "IT");
        this.admins = admins;
    }

    describe() {
        console.log('IT Department Id: ',this.id);
    }
}

class AccountingDepartment5 extends DepartmentDD{
    private lastReport: string;
    private static instance: AccountingDepartment5;

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
    
    private constructor(id: string, private reports: string[]){
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    static getInstance(){
        if(AccountingDepartment5.instance){
            return this.instance
        }
        this.instance = new AccountingDepartment5('d07', []);
        return this.instance;
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

const emp3 = DepartmentDD.createEmp("Henary");
console.log(emp3, DepartmentDD.fiscalYear);


let itd5 = new ITDepartment5("Ac107", ["Peter", "Jack"]);
console.log(itd5);
itd5.describe();

itd5.addEmployees("Max");
itd5.addEmployees("Peter");

itd5.printEmpInfo();

// const accDept5 = new AccountingDepartment5('d6', []);

const accDept5 = AccountingDepartment5.getInstance();
// const accDept6 = AccountingDepartment5.getInstance();

console.log(accDept5);

accDept5.mostRecentReport = "TS Dev Report";
accDept5.addReport('TS Report');
accDept5.addReport('Something went wrong...')

console.log(accDept5.mostRecentReport);

accDept5.addEmployees('Peter');
accDept5.addEmployees('TsDev');

// accDept5.printEmpInfo();
// accDept5.printReports();

accDept5.describe();

