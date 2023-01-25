import { Component, OnInit } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';
import { ProductService } from '../servers/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/800/400`);
  img = './assets/E2.jpg'
  constructor(private product:ProductService) { }

  ngOnInit(): void {
    // this.product.popularProduct().subscribe((result)=>{

    // })
  }
  

}
