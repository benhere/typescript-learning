// creatinga Generic function in TS

function merge1<T, U>(obA: T, obB: U){
    return {...obA, ...obB};
}

// console.log(merge1({name: 'Peter'}, {age: 33}));

const mergedObj1 = merge1({name: 'Peter', hobbies: ['sports', 'music']}, {age: 33});

console.log(mergedObj1);
console.log(mergedObj1.age);
