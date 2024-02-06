// The "keyof" Constraint in TS

function extractAndConvert1<T extends object, U extends keyof T>(obj: T, key: U){
    return obj[key];
}

extractAndConvert1({name: 'Peter'}, 'name');
