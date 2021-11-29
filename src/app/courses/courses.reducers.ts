import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { strictEqual } from "assert";
import { initialAuthState } from "../auth/reducers";
import { CourseActions } from "./action-types";
import { compareCourses, Course } from "./model/course";

export interface CoursesState extends EntityState<Course> {
  allCoursesLoaded: boolean;
}

//id is default but here created function to demostrate
export const adapter = createEntityAdapter<Course>({
  selectId: (c) => c.id,
  sortComparer: compareCourses,
}); //compare course is function in course model

export const initialCoursesState = adapter.getInitialState({
  allCoursesLoaded: false, //initaial value of flag in state
});

// let state: CoursesState;

// state.entities
// state.ids

export const coursesReducer = createReducer(
  initialCoursesState,
  on(
    CourseActions.allCoursesLoaded,
    (state, action) =>
      adapter.addAll(action.courses, { ...state, allCoursesLoaded: true }) //adeptor returns new version of state by adding action.courses
  ),
  on(CourseActions.courseUpdated, (state, action) =>adapter.updateOne(action.update,state)) //update partial object from action and current state
);

export const {
  selectAll, //property needed to be exported
} = adapter.getSelectors(); //adeptor.getSelectors() returns basic common selectors
