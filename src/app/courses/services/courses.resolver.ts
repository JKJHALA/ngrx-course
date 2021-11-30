import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { filter, first, map, tap } from "rxjs/operators";
import { CourseEntityService } from "./course-entity.service";

@Injectable()
export class CoursesResolver implements Resolve<boolean> {

constructor(private coursesService:CourseEntityService){}//we need to use courses entity service

  resolve(route:ActivatedRouteSnapshot, routeState: RouterStateSnapshot):Observable<boolean> {


    return this.coursesService.loaded$.pipe(
      tap(loaded=>{
        if(!loaded)
        {
        this.coursesService.getAll() //if not loaded then it will trigger

        }//if closed

      }),//tap close
      filter(loaded=>!!loaded), //if not loaded then in next emited value we will get true
      first() //return first value(always true)
    );//pipe closed



  }
}
