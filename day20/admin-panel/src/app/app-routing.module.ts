import { SignupComponent } from './signup/signup.component';
import { OrderListComponent } from './order-list/order-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { LoginComponent } from './login/login.component';

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
