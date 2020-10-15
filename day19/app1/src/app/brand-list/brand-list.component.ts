import { BrandService } from './../brand.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit {

  brandService: BrandService
  brands=[]
  constructor(brandService: BrandService) {
    this.brandService=brandService

  }

  ngOnInit(): void {
    this.onload()
  }

  onload(){
    this.brandService.getBrands().subscribe(res=>{
      if(res['status']=='success'){
        this.brands=res['data']
      }
      else{
        console.log(res['error'])

      }
    })
  }

}
