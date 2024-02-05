
// More on Type Guards in TS

type Admin2 = {
    name: string,
    privileges: string[]
};

type Employess2 = {
    name: string,
    startDate: Date;
};

type ElevatedEmp2 = Admin2 & Employess2;

const e2: ElevatedEmp2 = {
    name: 'Peter',
    privileges: ['learn-TS'],
    startDate: new Date()
}

type Combined = string | number;
type Numeric = number | boolean;

type Universal2 = Combined & Numeric;

function addObj(a: Combined, b: Combined){
    if(typeof a === 'string' || typeof b === 'string'){
        return a.toString() + b.toString();
    }
    return a + b;
}

type UnknownEmployee1 = Employess2 | Admin2;

function printEmpInfo(emp1: UnknownEmployee1){
    console.log("Name: ",emp1.name);

    if('privileges' in emp1){
        console.log("Priviledges: ", emp1.privileges);
    }

    if('startDate' in emp1){
        console.log("Start Date: ", emp1.startDate);
    }
}

printEmpInfo(e2);

printEmpInfo({
    name: 'Martin',
    startDate: new Date()
});

class Car1{
    drive(){
        console.log('Driving Car...');
    }
}

class Truck1{
    drive(){
        console.log('Driving truck...');
    }

    loadCargo(amount: number){
        console.log('Loading cargo...'+ amount);
    }
}

type Vechicle1 = Car1 | Truck1;

const v2 = new Car1();
const v3 = new Truck1();

function useVehicle(vehicle: Vechicle1){
    vehicle.drive();

    if(vehicle instanceof Truck1){
        vehicle.loadCargo(1000);
    }
}

useVehicle(v2);
useVehicle(v3);
