
// Working with Constraints in TS

function merge2<T extends object, U extends object>(obA: T, obB: U){
    return {...obA, ...obB};
}

// console.log(merge1({name: 'Peter'}, {age: 33}));

const mergedObj2 = merge2({name: 'Peter', hobbies: ['sports', 'music']}, {age: 33});

console.log(mergedObj2);
console.log(mergedObj2.age);

