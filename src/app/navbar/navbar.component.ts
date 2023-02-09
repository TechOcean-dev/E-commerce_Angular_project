import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { product } from 'src/datatype';
import { ProductService } from '../servers/product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  Menutype:string = 'default'
  SellerName:string = ''
  UserName:string | any
  Searchresult: undefined | product[]
  constructor(private router:Router , private product:ProductService) { }

  ngOnInit(): void {
    this.router.events.subscribe((val: any)=>{
      if(val.url){
        if(localStorage.getItem('seller') && val.url.includes('seller')){
          this.Menutype = 'seller'
          let sellerstore = localStorage.getItem('seller')
          let sellerdata = sellerstore && JSON.parse(sellerstore)[0]
          this.SellerName = sellerdata.name

        } else 
           if(localStorage.getItem('user')){
            let userstore = localStorage.getItem('user')
            let userdata = userstore && JSON.parse(userstore)[0]
            this.UserName = userdata.name
            this.Menutype = 'user'
        }
        else{
          this.Menutype = 'default'
        }
      }
    })
  }

  logout(){
    localStorage.removeItem('seller'),
    this.router.navigate(['/'])
  }
  User_logout(){
    localStorage.removeItem('user'),
    this.router.navigate(['/user-auth'])
  }
  SerachProduct(query: KeyboardEvent){
    if(query){
      const element = query.target as HTMLInputElement;
      this.product.searchProduct(element.value).subscribe((result)=>{
         console.warn(result)
         if(result.length>5){
          result.length= 5;
         }
         this.Searchresult = result
      })
    }

  }
  hideSearch(){
    this.Searchresult= undefined
  }
  Search(product:any){
    console.warn("Search Product",product.value)
  }
}
