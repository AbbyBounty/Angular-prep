import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {



employees=[
  {
    id:1,
    name:'employee 1',
    department:'admin'
  },
  {
    id:2,
    name:'employee 2',
    department:'computer'
  },
  {
    id:3,
    name:'employee 3',
    department:'system'
  }

]

  constructor() { }

  ngOnInit(): void {
  }

}
