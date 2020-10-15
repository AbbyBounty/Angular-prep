import { CategoryService } from './../category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {


  categoryService:CategoryService
  categories=[]
  constructor(categoryService:CategoryService) { this.categoryService=categoryService}

  ngOnInit(): void {
    this.onload()
  }

  onload(){
    this.categoryService.getCategories().subscribe(res=>{
      if(res['status']=='success'){
        this.categories=res['data']
        console.log(this.categories)
      }
      else{
        console.log(res['data'])
      }
    })
   
  }
}
