
// Rest parameters (...) 

const addNumbers = (...nums: number[]) => {
    return nums.reduce((curRes, curVal) => {
        return curRes + curVal;
    }, 0)
}

const numsSum = addNumbers(3,5,6,7,9.8,11,2.43,11);
console.log(numsSum);






