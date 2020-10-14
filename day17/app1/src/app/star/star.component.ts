import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {

  rating = 2
  ratings = [0, 1, 2, 3, 4]

  constructor() { }

  ngOnInit(): void {
  }

}
