

// Generic classes in TS

class DataStorage1<T extends string | number | boolean>{
    
    private data: T[] = [];

    addItem(item: T){
        this.data.push(item);
    }

    removeItem(item: T){
        if(this.data.indexOf(item) === -1){
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItem(){
        return [...this.data];
    }
}

const textStorage1 = new DataStorage1<string>();
textStorage1.addItem("Ryan");
textStorage1.addItem("Jack");

textStorage1.removeItem("Ryan");
console.log(textStorage1.getItem());

// const objStorage1 = new DataStorage1<object>();

// const genObj1 = {name: 'Peter'};
// const genObj2 = {name: 'Max'};

// objStorage1.addItem(genObj1);
// objStorage1.addItem(genObj2);

// objStorage1.removeItem(genObj1);

// console.log(objStorage1.getItem());
