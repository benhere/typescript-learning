
// Array & Object destructuring

// Array destructuring
const values = [1,2,3,4,5,6];

const [v1, val2, ...res1] = values;

console.log(values, v1, val2);

// object destructuring

const pObj1 = {
    name1: "TS_User",
    age1: 22,
}

const { name1: fn1, age1} = pObj1;

console.log(fn1);




