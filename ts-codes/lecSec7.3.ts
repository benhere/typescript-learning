

// Another Generic Function in TS

interface Lengthy1{
    length: number;
}

function countAndDesc1<T extends Lengthy1>(element: T): [T, string] {
    let descText = 'Got no value';
    if(element.length === 1){
        descText = 'Got 1 element';
    }else if(element.length > 1){
        descText = 'Got ' + element.length + ' elements'
    }
    return [element, descText];
}

console.log(countAndDesc1("Hi there"));




