import { HttpClient } from '@angular/common/http';
import { EventEmitter,Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { SellerSignup } from 'src/datatype';

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
        this.isUserLoggedIn.next(true);
        localStorage.setItem('user', JSON.stringify(resulth.body))
        console.warn(resulth.body)
        this.router.navigate(['/'])
    })
  }
}
