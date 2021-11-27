import { createAction } from "@ngrx/store";

export const loadAllcourses= createAction(
  "[Courses Resolver] Load All Courses"
);

export const allCoursesLoaded=createAction(
  "[Load Courses Effect] All courses Loaded now"
)
