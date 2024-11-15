import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SellerService } from './servers/seller.service';

@Injectable({
  providedIn: 'root'
})
export class SellerAuthGuard implements CanActivate {
  constructor (private sellerservice:SellerService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(localStorage.getItem('seller')){
        return true
      }
    return this.sellerservice.isSellerLoggedIn;
  }
  
}
