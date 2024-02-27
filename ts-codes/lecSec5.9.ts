
// Static Methods & Properties in TS

class DepartmentB{
    static fiscalYear = 2024;
    protected empArr: string[] = [];

    constructor(private readonly id: string, public name: string){
        // this.name = n;
    }

    static createEmp(name: string){
        return {name: name};
    }

    describe(this: DepartmentB){
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

class ITDepartment3 extends DepartmentB{
    admins: string[];
    constructor(id: string, admins: string[]){
        super(id, "IT");
        this.admins = admins;
    }
}

class AccountingDepartment3 extends DepartmentB{
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

const emp1 = DepartmentB.createEmp("Henary");
console.log(emp1, DepartmentB.fiscalYear);


let itd3 = new ITDepartment3("Ac102", ["Peter", "Jack"]);
console.log(itd3);
itd3.describe();

itd3.addEmployees("Max");
itd3.addEmployees("Peter");

itd3.printEmpInfo();

const accDept3 = new AccountingDepartment3('d4', []);

accDept3.mostRecentReport = "TS Dev Report";

accDept3.addReport('TS Report');
accDept3.addReport('Something went wrong...')

console.log(accDept3.mostRecentReport);

accDept3.addEmployees('Peter');
accDept3.addEmployees('TsDev');3
accDept3.printEmpInfo();
accDept3.printReports();

