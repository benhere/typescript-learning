
//  The "never" Type

function generateError(errMsg: string, code: number): never {
    throw {
        message: errMsg,
        erroreCode: code
    };
}

let res = generateError('An erorr occured!', 500);
console.log(res);
