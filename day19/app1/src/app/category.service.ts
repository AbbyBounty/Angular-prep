import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
httpClient:HttpClient
url="http://localhost:3000/category"
  constructor(httpClient:HttpClient) {
    this.httpClient=httpClient
   }

   getCategories(){
     return this.httpClient.get(this.url)
   }
}
