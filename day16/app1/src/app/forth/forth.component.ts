import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forth',
  templateUrl: './forth.component.html',
  styleUrls: ['./forth.component.css']
})
export class ForthComponent implements OnInit {


  boxType=1
  color='green'

  constructor() { }

  ngOnInit(): void {
  }

   handle(){
    alert('handle clicked')
}

changeColor(num:number){
this.boxType=num
}

}
