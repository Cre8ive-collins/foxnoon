import { Product } from './../models/product';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    new Product(1, "product 1", 'This is product 1', 100, 1, ['assets/cream.jpg', 'assets/chair.jpg', 'assets/pulse.jpg']),
    new Product(2, "product 2", 'This is product 2', 150, 1,  ['assets/chair.jpg', 'assets/cream.jpg', 'assets/pulse.jpg']),
    new Product(3, "product 3", 'This is product 3', 300, 1,  ['assets/pulse.jpg', 'assets/chair.jpg', 'assets/cream.jpg']),

  ]

  constructor() { }

  getProducts(){
    return this.products
  }

  singleProduct(id: number){
    return this.products.find(product =>
      product.id === id
      )
  }
}
