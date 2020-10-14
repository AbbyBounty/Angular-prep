import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

cars=[

  {
    id:1,model:'i20',company:'hyundai'
  },
  {
    id:1,model:'nana',company:'tata'
  },
  {
    id:1,model:'A4',company:'Audi'
  }
]

  constructor() { }

  ngOnInit(): void {
  }

}
