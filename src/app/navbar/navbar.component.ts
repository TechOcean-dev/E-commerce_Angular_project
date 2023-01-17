import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  Menutype:string = 'default'
  SellerName:string = ''
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((val: any)=>{
      if(val.url){
        if(localStorage.getItem('seller') && val.url.includes('seller')){
          this.Menutype = 'seller'
          let sellerstore = localStorage.getItem('seller')
          let sellerdata = sellerstore && JSON.parse(sellerstore)[0]
          this.SellerName = sellerdata.name
          
        }else{
          this.Menutype = 'default'
        }
      }
    })
  }

  logout(){
    localStorage.removeItem('seller'),
    this.router.navigate(['/'])
  }

}
