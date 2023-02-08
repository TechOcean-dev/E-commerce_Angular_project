import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SellerSignup } from 'src/datatype';
import { UserService } from '../servers/user.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {
  showLoginForm = true
  showRegisterForm = false
  LoginAlert = false
  constructor(private router:Router, private user:UserService) { }

  ngOnInit(): void {
  }
  UserSignup(data:SellerSignup):void{
    this.user.UserSignup(data)
  }
  User_Login(data:any):void{
    console.warn(data)

  }
  UserLoginForm(){
     this.showRegisterForm= false
     this.showLoginForm = true
  }
  UserRegisterForm(){
    this.showLoginForm = false
    this.showRegisterForm= true

  }
}
