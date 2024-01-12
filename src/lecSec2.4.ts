
// Tuple in TS

// Tuple is fixed length array (newly added in TS)

const person: {
    name: string,
    age: number,
    hobbies: string[],
    role: [string, number]  
} = {
    name: "TS_Dev",
    age: 25,
    hobbies: ['sports', 'cooking'],
    role: ['author', 112]
}

// person.role.push('admin')  
// this will work correctly as push() is exception for tuple

// person.role[1] = 112;

