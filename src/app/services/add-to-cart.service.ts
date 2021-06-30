import { Product } from './../models/product';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddToCartService {
  cartItems = [];
  cartSubject = new Subject<any>();
  cartNumb = new Subject<any>();
  
  constructor() { 
    
  }

}
