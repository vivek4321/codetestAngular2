import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class EmployeesService {

  constructor(private http: Http) { 
    var obj;
    this.getEmployees().subscribe(data => obj=data, error => console.log(error));
  }

  public getEmployees(): Observable<any> {
    return this.http.get("http://localhost:4200/assets/data/employees.json")
                    .map((res:any) => res.json());
  }
  
  public postEmployee(value:any): Observable<any> {
    return this.http.post("http://localhost:4200/assets/data/employees.json",value)
    .map((res:any) => res.json());
  }
                  //   getEmployees(): Observable<any> {
                  //     // get users from api
                  //     return this.http.get('app/employees.json')//, options)
                  //         .map((response: Response) => {
                  //             console.log("mock data" + response.json());
                  //             return response.json();
                  //         }
                  //     );
                  // } 
}

