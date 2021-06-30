import { AddToCartService } from './../../services/add-to-cart.service';
import { Product } from './../../models/product';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  product:Product;

  displayImg = 0
  constructor( private ProductService : ProductService,
    private route: ActivatedRoute,
    private addToCartService: AddToCartService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id']
    this.product = this.ProductService.singleProduct(id)
  }

  increaseValue(product: Product){
    if(product.qty){
      this.product.qty++ 
    }
  }

  decreaseValue(product: Product){
    if(product.qty != 1){
      product.qty -= 1
    }
  }
 

  addToCart(product: Product){
    
    let itemsCart: any[];

    let cartDataNull = localStorage.getItem('cart')

    if(cartDataNull == null){
      let storeDataGet:any = [];

      storeDataGet.push(product);
      localStorage.setItem('cart', JSON.stringify(storeDataGet))
    }else{
      let productId = product.id;
      let index:number = -1;
      itemsCart = JSON.parse( localStorage.getItem('cart'))
      for(let i=0; i<itemsCart.length; i++){
        if(productId === itemsCart[i].id){
            itemsCart[i].qty = product.qty;
            index = i;
            break;
        }
      }
      if(index == -1){
        itemsCart.push(product)
        localStorage.setItem('cart', JSON.stringify(itemsCart))
      }
      else{
        localStorage.setItem('cart', JSON.stringify(itemsCart))
      }
    }
    this.cartNumberFunc()
  }

  cartNumber:number = 0;
  cartNumberFunc(){
     var cartValue = JSON.parse( localStorage.getItem('cart'));
      this.cartNumber = cartValue.length;
      this.addToCartService.cartSubject.next(this.cartNumber)
  }

}
