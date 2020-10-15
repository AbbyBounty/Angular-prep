import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSave(event){

  }

  onTitleChange(event){

  }

  onCancle(event){

  }

  onKeyUp(event){
    console.log(`onkeyup ${event}`)
  }

  onKeyDown(event){
    console.log(`onkeydown ${event}`)
  }

  onKeyChange(event){
    console.log(`onkeychange ${event}`)
  }

}
