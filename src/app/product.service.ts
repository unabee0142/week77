import { Injectable } from '@angular/core';
import { Product } from './components/product/newProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProduct() : Product[]{
    return [
    new Product(1,"Fried Chicken",100,20,"https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"),
    new Product(2,"Nugget",100,20,"https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"),
    new Product(3,"Mashed Potato",100,20,"https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"),
    new Product(4,"Egg Tart",100,20,"https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"),
    new Product(5,"Chicken Burger",100,20,"https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"),
  ];
  }
}
