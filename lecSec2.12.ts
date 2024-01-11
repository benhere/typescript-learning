
//  The "unknown" Type

let userInput: unknown;
let userIp: any;
let username: string;

userInput = 5;
userInput = "typescript";

//Error - Type 'unknown' is not assignable to type 'string'.
// username = userInput; 

// works fine
username = userIp;

// extra check 
if(typeof userInput === 'string'){
    username = userInput;
}

