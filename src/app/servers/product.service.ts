import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { product } from 'src/datatype';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  isProductAdd = new EventEmitter<boolean>(false)
  constructor(private http:HttpClient) { }

  addProduct(data:string){
    return this.http.post('http://127.0.0.1:8000/AddProduct/', data);
  }

  productlist(){
    return this.http.get<product[]>('http://127.0.0.1:8000/ProductList/')
  }

  product_category(){
    return this.http.get('http://127.0.0.1:8000/Product_category/')
  }

  product_delete(id:number){
    return this.http.delete(`http://127.0.0.1:8000/Productdelete/${id}/`)
  }

  get_Specific_product(id:string){
    return this.http.get<product>(`http://127.0.0.1:8000/Productdelete/${id}/`)
  }
  updateProduct(product:product){
    return this.http.patch<product>(`http://127.0.0.1:8000/Productdelete/${product.id}/`, product)

  }
}
