import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {

  // rating = 4
  // ratings = [0, 1, 2, 3, 4]

  face = 'disappointed'
  constructor() { }

  ngOnInit(): void {
  }

}
