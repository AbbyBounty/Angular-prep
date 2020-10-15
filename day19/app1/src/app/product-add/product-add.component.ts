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
  price=0
  category=1
  brand=1

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
    this.loadData()
  }

  loadData(){
    this.categoryService.
    getCategories()
    .subscribe(res=>{
      if(res['status']=='success'){
        this.categories=res['data']
        console.log(this.categories)
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
    this.productService.createProducts(this.title,this.description,this.price,this.category,this.brand).subscribe(res=>{
      if(res['status']=='success'){
        alert(`${this.title} added successfully`)
        console.log(this.title)
        console.log(this.description)
        console.log(this.price)
        console.log(this.brand)
        console.log(this.category)
      }
      else{
        console.log(res['error'])
      }
    })
  }

  onCancle(){
  
  }
}
