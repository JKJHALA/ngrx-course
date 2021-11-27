import { state } from '@angular/animations';
import { routerReducer } from '@ngrx/router-store';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { Action } from 'rxjs/internal/scheduler/Action';
import { environment } from '../../environments/environment';


//following is global state saved inside store
//better rename to AppState
export interface AppState {

}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer
};

export function logger (reducer: ActionReducer<any>) : ActionReducer<any>
{

  return (state,action) =>{
    console.log("current status before: " + state);
    console.log("action: " +action);

    return reducer(state,action);
  }
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [logger] : [];
