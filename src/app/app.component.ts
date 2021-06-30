import { AddToCartService } from './services/add-to-cart.service';
import { Component, HostListener, ElementRef  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']


})
export class AppComponent {

  sideBarOpen: boolean = false;
  cart:number = 0;

  constructor(
    private router : Router,
    private addToCartService: AddToCartService
    ) { 
      this.addToCartService.cartSubject.subscribe(data =>{
        this.cart = data;
    }) }

  ngOnInit(): void {
    this.cartItemFunc();
  }

  cartItemFunc(){
    if(localStorage.getItem('cart') != null){
      var cartCount = JSON.parse(localStorage.getItem('cart'));
      this.cart = cartCount.length;
    }
  }

  LoginUser(){
    this.router.navigate(["login"]);
  }

  toggleSideBar(){
    document.getElementsByClassName('sidebar')[0].classList.add('showsidebar');
    this.sideBarOpen = true;
  }

  removeSideBar(){
    document.getElementsByClassName('sidebar')[0].classList.remove('showsidebar');
    this.sideBarOpen = false;
  }

}
