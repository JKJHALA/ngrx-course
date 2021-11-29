import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DefaultDataService, HttpUrlGenerator } from "@ngrx/data";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Course } from "../model/course";

//override default behaviour using this
//need to regiter in moduele
@Injectable()
export class CoursesDataService extends DefaultDataService<Course> {
  constructor(http: HttpClient, HttpUrlGenerator: HttpUrlGenerator) {
    //first paramter is entity
    super("Course", http, HttpUrlGenerator);
  }

getAll(): Observable<Course[]>{
  return this.http.get('/api/courses')
    .pipe(
      map(res=>res["payload"])
    )

}


}
