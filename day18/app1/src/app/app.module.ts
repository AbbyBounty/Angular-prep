import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddProductV1Component } from './add-product-v1/add-product-v1.component';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    AddProductComponent,
    AddProductV1Component,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
