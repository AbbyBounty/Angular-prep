import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-list',
  templateUrl: './mobile-list.component.html',
  styleUrls: ['./mobile-list.component.css']
})
export class MobileListComponent implements OnInit {

  mobiles = [
    {
      id: 1, 
      model: 'iPhone XS Max',
      company: 'Apple',
      price: 144000
    },
    {
      id: 12, 
      model: 'iPhone 7 plus',
      company: 'Apple',
      price: 98000
    },
    {
      id: 39, 
      model: 'iPhone 6 plus',
      company: 'Apple',
      price: 95000
    },
    {
      id: 42, 
      model: 'iPhone 4',
      company: 'Apple',
      price: 60000
    },
    {
      id: 15, 
      model: 'iPhone 3Gs',
      company: 'Apple',
      price: 45000
    },
    {
      id: 6, 
      model: 'Z10',
      company: 'BlackBerry',
      price: 40000
    },
    {
      id: 7, 
      model: 'Galaxy S3',
      company: 'Samsung',
      price: 43000
    },
    {
      id: 8, 
      model: 'Nexus One',
      company: 'HTC',
      price: 30000
    },
    {
      id: 9, 
      model: 'Nokia 770',
      company: 'Nokia',
      price: 41000
    },
    {
      id: 10, 
      model: 'Note 5 Pro',
      company: 'Xiomi',
      price: 20000
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(mobile, index) {
    const answer = confirm(`Are you sure you want to delete ${mobile['model']}`)
    if (answer) {
      alert('deleting...')
      this.mobiles.splice(index, 1)
    }
  }

  onEdit(mobile) {
    alert(`editing ${mobile['model']} ...`)
  }

}
