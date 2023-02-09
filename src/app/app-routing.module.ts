import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './all-products/all-products.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SearchComponent } from './search/search.component';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { SellerAuthGuard } from './seller-auth.guard';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SellerProductListComponent } from './seller-product-list/seller-product-list.component';
import { SellerUpdateProductComponent } from './seller-update-product/seller-update-product.component';
import { UserAuthComponent } from './user-auth/user-auth.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'seller-auth',
    component: SellerAuthComponent
  },
  {
    path: 'seller-home',
    component: SellerHomeComponent,
    canActivate: [SellerAuthGuard]
  },
  {
    path: 'seller-add-product',
    component: SellerAddProductComponent,
    canActivate: [SellerAuthGuard]
  },
  {
    path: 'seller-product-list',
    component: SellerProductListComponent,
    canActivate: [SellerAuthGuard]
  },
  {
    path: 'Product-Detail/:id',
    component: ProductDetailsComponent
  },
  {
    path: 'seller-product-update/:id',
    component : SellerUpdateProductComponent,
    canActivate: [SellerAuthGuard]
  },
  {
    path: "serach_product/:id",
    component: SearchComponent
  },
  {
    path: "user-auth",
    component: UserAuthComponent
  },
  {
    path: "all-product",
    component: AllProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
