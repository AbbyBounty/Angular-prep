import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productService:ProductService

  products=[
  //   {
  //     "id": 1,
  //     "title": "iphone updated",
  //     "description": "this is apples",
  //     "price": "12222",
  //     "isActive": 0,
  //     "brand": {
  //         "id": 1,
  //         "title": "apple"
  //     },
  //     "category": {
  //         "id": 1,
  //         "title": "electronics"
  //     }
  // }
  ]
  
  constructor(productService:ProductService) { 
    this.productService=productService
  }

  ngOnInit(): void {
    this.loadProducts()
  }


  loadProducts(){

    const req=this.productService.getProducts()
      req.subscribe(res=>{
        if(res['status']=='success')
        {
           this.products=res['data']
           console.log(this.products)

        }
      })
    
  }

}
