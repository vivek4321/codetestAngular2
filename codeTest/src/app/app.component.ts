import { Component } from '@angular/core';

import {EmployeesService} from './employeesService';
import {SkillsService} from './skillsService';
import { FormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employees;
  skills;
  submitted;
  showForm = false;

  public user: Object = {
    firstName:String,
    lastName:String,
    jobTitleName:String,
    phoneNumber:String,
    emailAddress:String,
    skills:String
  }
  					

  constructor(private employeesService:EmployeesService , private skillsService:SkillsService) {    
    
  }

  ngOnInit(){
    this.employeesService.getEmployees().subscribe(result => {
      this.employees = result;
      console.log(result);
      console.log(this.skills);
    });

    this.skillsService.getSkills().subscribe(result => {
      result.sort(function(a, b) {
        return (a.id - b.id)
      });
      this.skills = result;
          console.log(result);
          console.log(this.skills);
        }); 

  }
  register(value){
    this.employees.push(value);
    // this.employeesService.postEmployee(value).subscribe(result => {
    this.user = {};
    // });
    console.log(value);
  }

  submitForm(){
    this.submitted = true;
  }

  addForm(){
    this.showForm = true;
  }
}
