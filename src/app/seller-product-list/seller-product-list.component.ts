import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../servers/product.service';
import {faTrash, faPenSquare, faEdit} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-seller-product-list',
  templateUrl: './seller-product-list.component.html',
  styleUrls: ['./seller-product-list.component.css']
})
export class SellerProductListComponent implements OnInit {
  Productlist: any
  ProductDeleteAlert = false
  DeleteIcon = faTrash
  UpdateIcon = faEdit
  constructor(private product: ProductService) { }

  ngOnInit(): void {
    this.Product_List()
  }

  ProductDelete(id: number) {
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

  ProductUpdate(id: number) {
    console.warn("Update  ----> ", id)
    // this.product.product_update(id).subscribe((result) => {
    //   console.warn("Before = ", result)
    //   if (result) {
    //     this.ProductDeleteAlert = true
    //     this.Product_List()
    //   }

    //   setTimeout(() => this.ProductDeleteAlert = false
    //     , 7000);
    // })
  }


  Product_List() {
    this.product.productlist().subscribe((result) => {
      this.Productlist = result
    })
  }

}
