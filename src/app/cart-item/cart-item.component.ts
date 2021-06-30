import { AddToCartService } from './../services/add-to-cart.service';
import { Product } from './../models/product';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
   
  displayNumb = 0

  @Input() productItem: Product

  constructor(
    private addToCartService : AddToCartService
   ) { 
     
   }

  ngOnInit(): void {
    this.cartDetails()
    this.loadTotal();
  }

  getCartDetails:any = [];
  cartDetails(){
    if(localStorage.getItem('cart')){
      this.getCartDetails = JSON.parse(localStorage.getItem('cart'));
    }
  }

  increaseQty(id, qty){
    for(let i=0; i<this.getCartDetails.length; i++){
      if(this.getCartDetails[i].id === id){
        this.getCartDetails[i].qty =  parseInt(qty) + 1
      }
    }
    localStorage.setItem('cart', JSON.stringify(this.getCartDetails))
    this.loadTotal();
  }

  decreaseQty(id, qty){
    for(let i=0; i<this.getCartDetails.length; i++){
      if(this.getCartDetails[i].id === id){
        if(qty != 1){
          this.getCartDetails[i].qty =  parseInt(qty) - 1
        }
      }
    }
    localStorage.setItem('cart', JSON.stringify(this.getCartDetails))
    this.loadTotal();
  }


  total: number = 0;
  loadTotal(){
    if(localStorage.getItem('cart')){
      this.getCartDetails = JSON.parse(localStorage.getItem('cart'));
      this.total = this.getCartDetails.reduce(function(acc, val){
        return acc + (val.price * val.qty);
      }, 0)
    }
  }


  removeAll(){
    localStorage.removeItem('cart');
    this.getCartDetails = [];
    this.total = 0;
    this.cartNumber = 0;
    this.addToCartService.cartSubject.next(this.cartNumber)
  }


  removeItem(getCartDetail){
    if(localStorage.getItem('cart')){
      this.getCartDetails = JSON.parse(localStorage.getItem('cart'))
  
      for(let i=0; i < this.getCartDetails.length; i++){
        if(getCartDetail === this.getCartDetails[i].id){
          this.getCartDetails.splice(i, 1);
          localStorage.setItem('cart', JSON.stringify(this.getCartDetails))
          this.loadTotal();
          this.cartNumberFunc();
      }
    }
    }
  }

  cartNumber:number = 0;
  cartNumberFunc(){
     var cartValue = JSON.parse( localStorage.getItem('cart'));
      this.cartNumber = cartValue.length;
      this.addToCartService.cartSubject.next(this.cartNumber)
  }

}
