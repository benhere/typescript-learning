
import 'reflect-metadata';
import { Product } from './product.model'
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';

const products = [
    { title: 'A Carpet', price: 29.87 },
    { title: 'A Honey', price: 16.67 }
];

const newProd = new Product('', -6.7);

validate(newProd).then(errors => {
    if(errors.length > 0){
        console.log("Validation Errors:", errors);
    }else{
        console.log(newProd.getInformation());
    }
})



// const loadedProduct = products.map((prd) => {
//     return new Product(prd.title, prd.price);
// })

const loadedProducts = plainToClass(Product, products);

for(const prod of loadedProducts){
    console.log("Product Info:",prod.getInformation());
}


