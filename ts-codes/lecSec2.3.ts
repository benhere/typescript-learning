
// object & Array in TS

const person: {
    name: string,
    age: number,
    hobbies: string[]
} = {
    name: "TS_Dev",
    age: 25,
    hobbies : ['sports', 'cooking']
}

for(const hobby of person.hobbies){
    console.log(hobby);
}
