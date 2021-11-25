import { Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from "@angular/router";
import { AppState } from "./reducers";
import { isLoggedIn, isLoggedOut } from "./auth/auth.selectors";
import { logout } from "./auth/auth.actions";
import { AuthActions } from "./auth/action-types";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  loading = true;

  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;

  constructor(private router: Router, private store: Store<AppState>) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading = true;
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.loading = false;
          break;
        }
        default: {
          break;
        }
      }
    });

    // this.isLoggedIn$= this.store.pipe(
    //   map(state=> !!state["auth"].user)
    // )

    this.isLoggedIn$ = this.store.pipe(
      select(isLoggedIn) //parameter is selector function
      //select ngrx operator cobination of debounce and map operator
    );

    this.isLoggedOut$ = this.store.pipe(select(isLoggedOut));

    const userData = localStorage.getItem("user");
    if (userData) {
      this.store.dispatch(AuthActions.login({user: JSON.parse(userData)}));
    }
  }

  logout() {
    this.store.dispatch(logout());
  }
}
