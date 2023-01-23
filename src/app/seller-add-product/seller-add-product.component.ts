import { Component, OnInit } from '@angular/core';
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
  PCategory(e:any){
    console.log(e.target.value)
  }
  constructor(private product: ProductService) { }

  ngOnInit(): void {
    this.product.product_category().subscribe((data)=>{
      console.warn(data)
      this.Product_category= data
    })
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
