import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms'
import { ProductService } from './product.service';
import { ProductAddComponent } from './product-add/product-add.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductAddComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
