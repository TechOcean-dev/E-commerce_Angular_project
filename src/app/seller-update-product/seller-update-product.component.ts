import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../servers/product.service';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent implements OnInit {
 productdata : any | string| undefined
 Product_category: any
 ProductUpdateAlert = false
 ProductMessage: undefined | string
  constructor(private route : ActivatedRoute, private product: ProductService) { }

  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('id')
    productId && this.product.get_Specific_product(productId).subscribe((data)=>{
      this.productdata = data
    })
    this.product.product_category().subscribe((data)=>{
      this.Product_category= data
    })
  }
  UpdateProduct(data:any){
    if(this.productdata){
      data.id = this.productdata.id
    }
    this.product.updateProduct(data).subscribe((result)=>{
       this.ProductUpdateAlert= true
       this.ProductMessage="Product is updated"
    })

  }
}
