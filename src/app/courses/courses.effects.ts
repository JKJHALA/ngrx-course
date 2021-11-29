import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concatMap, map } from "rxjs/operators";
import { CourseActions } from "./action-types";
import { allCoursesLoaded } from "./course.actions";
import { CoursesHttpService } from "./services/courses-http.service";

@Injectable()
export class CoursesEffects {
  loadCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CourseActions.loadAllcourses),
      concatMap((action) => this.courseHttpService.findAllCourses()),
      map((courses) => allCoursesLoaded({ courses })) //if effect is not of dispatch false then we need to disptech action
    )
  ); //create effect

  saveCourses$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CourseActions.courseUpdated),
        concatMap((action) =>
          this.courseHttpService.saveCourse(
            action.update.id,
            action.update.changes
          )
        )
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private courseHttpService: CoursesHttpService
  ) {}
}
