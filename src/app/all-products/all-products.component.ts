import { Component, OnInit } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';
import { ProductService } from '../servers/product.service';
import {faEye, faShoppingBasket} from '@fortawesome/free-solid-svg-icons'
import { product } from 'src/datatype';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  img = './assets/E2.jpg'
  ViewIcon = faEye
  bagIcon = faShoppingBasket
  Productlist: undefined | product[] | any
  constructor(private product:ProductService) { }

  ngOnInit(): void {
    this.Product_List()
  }
  Product_List() {
    this.product.productlist().subscribe((result) => {
      this.Productlist = result
    })
  }

}
