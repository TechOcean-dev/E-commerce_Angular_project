import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../servers/product.service';

@Component({
  selector: 'app-seller-product-list',
  templateUrl: './seller-product-list.component.html',
  styleUrls: ['./seller-product-list.component.css']
})
export class SellerProductListComponent implements OnInit {
  Productlist: any
  ProductDeleteAlert = false
  constructor(private product: ProductService) { }

  ngOnInit(): void {
    this.Product_List()
  }

  ProductDelete(id: number) {
    console.warn(id)
    this.product.product_delete(id).subscribe((result) => {
      console.warn("Before = ", result)
      if (result) {
        this.ProductDeleteAlert = true
        this.Product_List()
      }

      setTimeout(() => this.ProductDeleteAlert = false
        , 7000);
    })
  }

  Product_List() {
    this.product.productlist().subscribe((result) => {
      this.Productlist = result
    })
  }

}
