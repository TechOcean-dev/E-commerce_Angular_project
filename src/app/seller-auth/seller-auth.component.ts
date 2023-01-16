import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { SellerSignup, Seller_Login } from 'src/datatype';
import { SellerService } from '../servers/seller.service';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {

  constructor( private seller:SellerService, private router:Router) { }
  showLoginForm = true
  showRegisterForm = false
  LoginAlert = false
  ngOnInit(): void {
     this.seller.reloadSeller()
  }
  SellerSignup(data:SellerSignup):void{
    this.seller.SellerSignup(data)
  }
  Seller_Login(data:Seller_Login):void{
    this.seller.Sellerlogin(data)
    this.seller.isLoggedInFail.subscribe((isError)=>{
      if(isError){
        this.LoginAlert = true
      }
    })
    
  }
  SellerLoginForm(){
     this.showRegisterForm= false
     this.showLoginForm = true
  }
  SellerRegisterForm(){
    this.showLoginForm = false
    this.showRegisterForm= true

  }
}
