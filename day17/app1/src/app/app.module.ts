import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CarListComponent } from './car-list/car-list.component';
import { MobileListComponent } from './mobile-list/mobile-list.component';
import { AccordionComponent } from './accordion/accordion.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    CarListComponent,
    MobileListComponent,
    AccordionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
