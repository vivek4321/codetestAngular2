import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {EmployeesService} from './employeesService';
import {SkillsService} from './skillsService';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule      
  ],
  providers: [EmployeesService,SkillsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
