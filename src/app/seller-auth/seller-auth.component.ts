import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { SellerSignup } from 'src/datatype';
import { SellerService } from '../servers/seller.service';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {

  constructor( private seller:SellerService, private router:Router) { }

  ngOnInit(): void {
     this.seller.reloadSeller()
  }
  SellerSignup(data:SellerSignup):void{
    this.seller.SellerSignup(data)
  }
  reloadSeller(){
    
  }
}
