import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../servers/product.service';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent implements OnInit {
  Selleremail: string = ''
  ProductAlert: boolean = false
  Product_category: any
  SellerId: any;
  constructor(private product: ProductService) { }

  ngOnInit(): void {
    this.product.product_category().subscribe((data)=>{
      this.Product_category= data
    })
    if(localStorage.getItem('seller')){
      let sellerstore = localStorage.getItem('seller')
      let sellerdata = sellerstore && JSON.parse(sellerstore)[0]
      this.SellerId = sellerdata.id
    
    }

  }


  addProduct(data: any) {
    console.warn(data)
    this.product.addProduct(data).subscribe((result)=>{
      if(result){
        this.ProductAlert = true
      }
      setTimeout(() =>this.ProductAlert=false
      , 7000);
    })
  }
}
