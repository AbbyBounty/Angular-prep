import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  httpClient:HttpClient

  title:string
  description:string
  price:number
  category:number
  brand:number

  url='http://localhost:3000/product'

  constructor(httpClient:HttpClient) { 
    this.httpClient=httpClient
  }

  getProducts(){
    
    return this.httpClient.get(this.url)
  }

  createProducts( title:string,
    description:string,
    price:number,
    category:number,
    brand:number )
  {
    const body={
      title:title,
    description:description,
    price:price,
    category:category,
    brand:brand
    }

    return this.httpClient.post(this.url,body)

  }

  editProducts(){

  }

}


