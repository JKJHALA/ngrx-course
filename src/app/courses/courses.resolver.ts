import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { filter, finalize, first, tap } from "rxjs/operators";
import { AppState } from "../reducers";
import { loadAllcourses } from "./course.actions";
import { areCoursesLoaded } from "./courses.selector";

@Injectable()
export class CoursesResolver implements Resolve<any>{

loading =false;

  constructor(private store: Store<AppState>) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

    return this.store.pipe(
      select(areCoursesLoaded),
      tap(coursesLoaded => {
        if(!coursesLoaded && !this.loading)
        { this.loading=true;
          this.store.dispatch(loadAllcourses())
        }

      }),
      filter(coursesLoaded=>coursesLoaded), //only proceed if courseseLoaded flage is set to true
      first(), //purpose is to wait till first value is emitted from above
      finalize(()=>this.loading=false) //just to unflag loading
    );

  }

}
