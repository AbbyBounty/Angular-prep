import { AddressAddComponent } from './address-add/address-add.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { AddressListComponent } from './address-list/address-list.component';

const routes: Routes = [
  {path:'login',component:LoginComponent}
  {path:'signup',component:SignupComponent}
  {path:'profile',component:ProfileComponent}
  {path:'address-add',component:AddressAddComponent}
  {path:'address-list',component:AddressListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
