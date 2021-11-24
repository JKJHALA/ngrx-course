import { createSelector } from "@ngrx/store";


export const isLoggedIn=createSelector(
state=>state["auth"],
(auth)=> !!auth.user  //auth is what is selected in first parameter it can be any variable

);

export const isLoggedOut=createSelector(
  isLoggedIn,
  (logIn)=> !logIn //auth is what is selected in first parameter it can be any variable

  );
