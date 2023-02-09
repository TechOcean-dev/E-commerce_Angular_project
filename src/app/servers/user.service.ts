import { HttpClient } from '@angular/common/http';
import { EventEmitter,Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { SellerSignup, Seller_Login } from 'src/datatype';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isUserLoggedIn = new BehaviorSubject<boolean>(false)
  isLoggedInFail = new EventEmitter<boolean>(false)

  constructor(private router:Router, private http:HttpClient) { }
  UserSignup(user:SellerSignup){
    this.http.post('http://127.0.0.1:8000/User_Registration/', user, {observe: 'response'})
    .subscribe((resulth)=>{
        localStorage.setItem('user', JSON.stringify(resulth.body))
        this.router.navigate(['/'])
    })
  }

  reloadUser(){
    if(localStorage.getItem('user')){
      this.router.navigate(['/'])
    }
  }
  Userlogin(data:Seller_Login){
     this.http.post('http://127.0.0.1:8000/User_Login/', data, {observe: 'response'}).subscribe((resulth: any)=>{
        console.warn("User Service inner", resulth.body)
       if (resulth && resulth.body && resulth.body.length){
        localStorage.setItem('user', JSON.stringify(resulth.body))
        this.router.navigate(['/'])
      }else
        {
        this.isLoggedInFail.emit(true)
      }
      })
  }

}
