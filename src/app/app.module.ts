import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { SellerProductListComponent } from './seller-product-list/seller-product-list.component';
import { SellerUpdateProductComponent } from './seller-update-product/seller-update-product.component';
import { SearchComponent } from './search/search.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { FooterComponent } from './footer/footer.component';
import { AllProductsComponent } from './all-products/all-products.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SellerAuthComponent,
    SellerHomeComponent,
    SellerAddProductComponent,
    SellerProductListComponent,
    SellerUpdateProductComponent,
    SearchComponent,
    ProductDetailsComponent,
    UserAuthComponent,
    FooterComponent,
    AllProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
