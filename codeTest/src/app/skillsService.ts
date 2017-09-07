import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SkillsService {

  constructor(private http: Http) { }

  public getSkills(): Observable<any> {
    return this.http.get("http://localhost:4200/assets/data/skills.json")
                    .map((res:any) => res.json());
  }

}
