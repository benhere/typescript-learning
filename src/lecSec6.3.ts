
// Discriminated Unions in TS

interface Bird1 {
    type: 'bird';
    flyingSpeed: number;
}

interface Horse1 {
    type: 'horse';
    runningSpeed: number;
}

type Animal1 = Bird1 | Horse1;

function moveAnimal(animal: Animal1){
    let speed;
    switch(animal.type){
        case 'bird':
            speed = animal.flyingSpeed
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log('Moving at speed: '+speed);
}

moveAnimal({
    type: 'bird',
    flyingSpeed: 100
});
