import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
  currentNumber = 0;
  constructor() { }

  ngOnInit(): void {
    
  }

  increaseValue(){
    this.currentNumber++
  }

  decreaseValue(){
    if(this.currentNumber > 0){
      this.currentNumber--
    }
  }

}
