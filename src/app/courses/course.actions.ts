import { Update } from "@ngrx/entity";
import { createAction, props } from "@ngrx/store";
import { Course } from "./model/course";


export const loadAllcourses= createAction(
  "[Courses Resolver] Load All Courses"
);

export const allCoursesLoaded=createAction(
  "[Load Courses Effect] All courses Loaded now",props<{courses: Course[]}>()
);


export const courseUpdated = createAction(
"[Edit Course Dialog] Cpourse Updated",
props<{update: Update<Course>}>()  //update is specal type ngrx for update

);

