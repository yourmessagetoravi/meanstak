import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpproductlistService {
  productList = "https://fakestoreapi.com/products";


  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get(this.productList);
  }
}
