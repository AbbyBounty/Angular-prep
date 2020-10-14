import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {

  boxType=3

  buttonType=7
  constructor() { }

  ngOnInit(): void {
  }

}
