import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  httpClient:HttpClient

  constructor(httpClient:HttpClient) { 
    this.httpClient=httpClient
  }

  getProducts(){
    const url='http://localhost:3000/product'
    return this.httpClient.get(url)
  }

  createProducts()
  {

  }

  editProducts(){

  }

}


