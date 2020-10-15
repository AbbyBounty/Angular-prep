import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products=[

    {
      id:1,
      titile:"dummy",
      description:"dummy description",
      "price":"100",
      
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
