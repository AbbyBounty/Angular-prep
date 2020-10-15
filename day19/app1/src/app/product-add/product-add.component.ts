import { CategoryService } from './../category.service';
import { BrandService } from './../brand.service';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  title=``
  description=``
  price=``
  category=``
  brand=``

  categories=[]
  brands=[]
  productService:ProductService
  brandService:BrandService
  categoryService:CategoryService
  constructor( productService:ProductService,brandService:BrandService,categoryService:CategoryService) {
      this.productService=productService
      this.brandService=brandService
      this.categoryService=categoryService
     }

  ngOnInit(): void {
  }

  loadData(){
    this.categoryService.
    getCategories()
    .subscribe(res=>{
      if(res['status']=='success'){
        this.categories=res['data']
      }else{
        console.log(res['error'])
      }
    })

    this.brandService.
    getBrands()
    .subscribe(res=>{
      if(res['status']=='success'){
        this.brands=res['data']
      }else{
        console.log(res['error'])
      }
    })

  }


  onSave(){
    this.productService.getProducts().subscribe(res=>{

    })
  }

  onCancle(){
  
  }
}
