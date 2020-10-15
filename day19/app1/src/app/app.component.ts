import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  router:Router
constructor(router:Router){
  this.router=router
  
}
  goToPage(page){
    let url=``
    switch(page){
      case 1: url='/product-list'; break;
      case 2: url='/product-add'; break;
      case 3: url='/brand-list'; break;
      case 4: url='/category-list'; break;
      case 5: url='/about-us'; break;
      default: break;

    }
  }

  


}
