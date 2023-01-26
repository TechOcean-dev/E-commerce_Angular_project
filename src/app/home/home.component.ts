import { Component, OnInit } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';
import { ProductService } from '../servers/product.service';
import {faEye, faShoppingBasket} from '@fortawesome/free-solid-svg-icons'
import { product } from 'src/datatype';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/800/400`);
  img = './assets/E2.jpg'
  ViewIcon = faEye
  bagIcon = faShoppingBasket
  Productlist: undefined | product[]
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
