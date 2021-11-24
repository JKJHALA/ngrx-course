import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./reducers";



//following creates typesafe status from store
export const selectAuthState  =
  createFeatureSelector<AuthState>("auth")



export const isLoggedIn=createSelector(
selectAuthState,
(auth)=> !!auth.user //auth is what is selected in first parameter it can be any variable

);

export const isLoggedOut=createSelector(
  isLoggedIn,
  (logIn)=> !logIn //auth is what is selected in first parameter it can be any variable

  );

