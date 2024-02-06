// Optional Chaining in TS

const fetchedUserData = {
    id: 'u1',
    name: 'Peter',
    job: { title: 'CEO', description: 'My own company' }
};

console.log(fetchedUserData.job.title);

// Optional chaining
// console.log(fetchedUserData?.job?.title);
