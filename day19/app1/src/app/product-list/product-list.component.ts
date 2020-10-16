import { Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productService:ProductService
  router:Router

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
  
  constructor(productService:ProductService,router:Router) { 
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


  onDelete(product){
    this.productService.deleteProduct(product['id']).subscribe(res=>{
      if(res['status']=='success'){
        alert(`${product['title']} deleted successfully..`)
        this.loadProducts()
      }
      else{
        console.log(res['error'])
      }
    })
  }

  onEdit(product){
    // thkis.router.navigate(['/product-add'], {queryParams: {id: product['id']}})
  }

}
