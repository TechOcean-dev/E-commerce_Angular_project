import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { SellerSignup } from 'src/datatype';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private http:HttpClient) { }
  SellerSignup(data:SellerSignup){
    // console.warn("Seller Serves Call again")
    return this.http.post('http://localhost:3000/seller', data)
  }
}
