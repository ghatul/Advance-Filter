import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FilterComponent } from './filter/filter/filter.component';
import { EmployeeComponent } from './dashboard/employee/employee.component';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {EmpCardFilterPipe} from './filter/card-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    EmployeeComponent,
    EmpCardFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
