
import {IsEmpty, IsNumber, IsPositive} from 'class-validator';

export class Product{
    @IsEmpty()
    title: string;
    @IsNumber()
    @IsPositive()
    price: number;

    constructor(t: string, p:number){
        this.title = t;
        this.price = p;
    }

    getInformation(){
        return [this.title, `has ${this.price} money`];
    }
}