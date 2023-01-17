import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../servers/product.service';

@Component({
  selector: 'app-seller-product-list',
  templateUrl: './seller-product-list.component.html',
  styleUrls: ['./seller-product-list.component.css']
})
export class SellerProductListComponent implements OnInit {
 Productlist : any
  constructor(private product:ProductService) { }

  ngOnInit(): void {
    this.product.productlist().subscribe((result)=>{
      this.Productlist= result
    })
  }

}
