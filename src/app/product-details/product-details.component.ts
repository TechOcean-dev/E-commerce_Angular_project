import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { ProductService } from '../servers/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productdata : any | string| undefined
  Product_category: any
  constructor(private route:ActivatedRoute, private product:ProductService) { }

  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('id')
    productId && this.product.get_Specific_product(productId).subscribe((data)=>{
      this.productdata = data
    })
  }

}
