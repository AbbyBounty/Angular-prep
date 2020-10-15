import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product-v1',
  templateUrl: './add-product-v1.component.html',
  styleUrls: ['./add-product-v1.component.css']
})
export class AddProductV1Component implements OnInit {

  title=``
  description=``
  price=``
  category=``

  constructor() { }

  ngOnInit(): void {
  }

  onSave(){
    console.log(`Product info:`)
    console.log(this.title)
    console.log(this.description)
    console.log(this.price)
    console.log(this.category)

  }

  onCancle(){

  }

}
