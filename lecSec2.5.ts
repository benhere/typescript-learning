// enum in TS

enum Role {Admin = 6, Read_only = 101, Author = 112};

const person = {
    name: "TS_Dev",
    age: 25,
    hobbies: ['sports', 'cooking'],
    role: Role.Admin
}

if(person.role === Role.Admin){
    console.log('is Admin');
    
}

