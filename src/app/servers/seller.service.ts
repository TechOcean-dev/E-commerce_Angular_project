import { EventEmitter, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { SellerSignup, Seller_Login } from 'src/datatype';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  isSellerLoggedIn = new BehaviorSubject<boolean>(false)
  isLoggedInFail = new EventEmitter<boolean>(false)

  constructor(private http:HttpClient, private router:Router) { }
  SellerSignup(data:SellerSignup){
    this.http.post('http://127.0.0.1:8000/Registration/', data, {observe: 'response'}).subscribe((resulth)=>{
      this.isSellerLoggedIn.next(true);
        localStorage.setItem('seller', JSON.stringify(resulth.body))
        this.router.navigate(['seller-home'])
    })
  }
  reloadSeller(){
    if(localStorage.getItem('seller')){
      this.router.navigate(['seller-home'])
    }
  }
  Sellerlogin(data:Seller_Login){
     
     this.http.post('http://127.0.0.1:8000/Login/', data, {observe: 'response'}).subscribe((resulth: any)=>{
        console.warn("Seller Service inner", resulth.body)
       if (resulth && resulth.body && resulth.body.length){
        localStorage.setItem('seller', JSON.stringify(resulth.body))
        this.router.navigate(['seller-home'])
      }else
        {
        this.isLoggedInFail.emit(true)
      }
      })
  }

}
