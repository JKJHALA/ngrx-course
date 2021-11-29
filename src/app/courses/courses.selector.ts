import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CoursesState } from "./courses.reducers";
import * as fromCourses from './courses.reducers';
import { allCoursesLoaded } from "./course.actions";

export const selectCoursesState=createFeatureSelector<CoursesState>("courses");

export const selectAllcourses=createSelector(
  selectCoursesState,  //complete state
  fromCourses.selectAll  //projector function..instead of doing for every selector we do some work in adeptor/reducer and re use
);

export const selectBeginnerCourses= createSelector(
  selectAllcourses,
  allCourses=>allCourses.filter(c=>c.category=='BEGINNER')
);

export const selectAdvancedCourses= createSelector(
  selectAllcourses,
  allCourses=>allCourses.filter(c=>c.category=='ADVANCED')
);

export const selectPromoTotal=createSelector(  //count of promo courses
  selectAllcourses,
  allCourses=>allCourses.filter(c=>c.promo).length
);

export const areCoursesLoaded=createSelector(
  selectCoursesState ,
  state=>state.allCoursesLoaded
);
