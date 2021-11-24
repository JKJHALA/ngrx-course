



import { createAction, props } from "@ngrx/store";
import { User } from "./model/user.model";


//action creator function - creates action .. actions needs to be dispetched
export const login = createAction(
  "[LoginPage] User Login",
  props<{user: User}>()
);


export const logout=createAction(
  "[Top Menu] Logout"
);
