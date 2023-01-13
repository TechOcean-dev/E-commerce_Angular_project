import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { SellerSignup } from 'src/datatype';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  isSellerLoggedIn = new BehaviorSubject<boolean>(false)

  constructor(private http:HttpClient, private router:Router) { }
  SellerSignup(data:SellerSignup){
    // console.warn("Seller Serves Call again")
    this.http.post('http://localhost:3000/seller', data, {observe: 'response'}).subscribe((resulth)=>{
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

}
