import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  firstname='steve'
  lastname='jobs'

  person={
    name:'person1',
    age:23,
    address:'pune'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
