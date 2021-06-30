
import { Component, OnInit } from '@angular/core';
import { Product } from './../../models/product';
import { ProductService } from './../../services/product.service';

@Component({
  selector: 'app-deal',
  templateUrl: './deal.component.html',
  styleUrls: ['./deal.component.css']
})
export class DealComponent implements OnInit {

  productList: Product[] = []
  constructor( private ProductService : ProductService,
    ) { }

  ngOnInit(): void {
    this. productList = this.ProductService.getProducts()
    console.log(this.productList)
  }
  

}
