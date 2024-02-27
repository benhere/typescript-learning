
// this in TS
class Department1{
    name: string;

    constructor(n: string){
        this.name = n;
    }

    describe(this: Department1){
        console.log('Department: '+this.name);
    }
}

let d = new Department1("Account");
console.log(d);
d1.describe();

const accCp1 = {
    name: 'copy',
    describe: d.describe
};

accCp1.describe();
