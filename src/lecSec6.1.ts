// Intersection Types in TS

type Admin1 = {
    name: string;
    privileges: string[];
}

type Employee1 = {
    name: string;
    startDate: Date;
}

type ElevatedEmployee1 = Admin1 & Employee1;

const e1: ElevatedEmployee1 = {
    name: 'Mackenzie',
    privileges: ['learn-ts'],
    startDate: new Date()
}

type Combinable1 = string | number;
type Numeric1 = number | boolean;

type Universal = Combinable1 & Numeric1;