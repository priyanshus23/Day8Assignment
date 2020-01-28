import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import {FormsModule} from '@angular/forms';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmployeecreateComponent } from './employeecreate/employeecreate.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeelistComponent,
    EmployeecreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
