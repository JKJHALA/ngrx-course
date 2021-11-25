import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Router } from "@angular/router";
import { tap } from "rxjs/operators";
import { AuthActions } from "./action-types";

@Injectable()
export class AuthEffects {
  //create effect allows to make observable as member as we don't execute anything
  login$ = createEffect(
    () =>
      //create effect automatically subscribes and allows error handling
      this.actions$.pipe(
        ofType(AuthActions.login), //type of is kind of filter operter provided by ngrx
        tap((action) => {
          //filtered so no action is type safe
          localStorage.setItem("user", JSON.stringify(action.user));
        })
      ),
    { dispatch: false } //this side effect don't dispetch another action
  );

  logout$=createEffect(()=>
  this.actions$.pipe(
    ofType(AuthActions.logout),
    tap((acction)=>{
      localStorage.removeItem('user');
      this.router.navigateByUrl("/login");
    })
  ),
  {dispatch:false}

  )

  constructor(private actions$: Actions, private router: Router) {
    // actions$.subscribe(action => {
    //   if (action.type == '[LoginPage] User Login') {
    //       localStorage.setItem('user', JSON.stringify(action["user"]))
    //   }
    // })
    // login$.subscribe();
  } //constructor
}
