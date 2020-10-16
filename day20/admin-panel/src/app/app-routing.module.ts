import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './../../../../day18/app1/src/app/login/login.component';
import { OrderListComponent } from './order-list/order-list.component';
import { ProductListComponent } from './../../../../day18/app1/src/app/product-list/product-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'dashbord',component:DashboardComponent},
  {path:'user-list',component:UserListComponent},
  {path:'product-list',component:ProductListComponent},
  {path:'order-list',component:OrderListComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
