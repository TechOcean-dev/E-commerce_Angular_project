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
  constructor(private route : ActivatedRoute, private product: ProductService) { }

  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('id')
    productId && this.product.product_update(productId).subscribe((data)=>{
      console.warn(data)
      this.productdata = data
    })

  }
  UpdateProduct(data:any){
    console.warn("Update  ----> ", data)

  }
}
