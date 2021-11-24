import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on,
} from "@ngrx/store";
import { AuthActions } from "../action-types";
import { User } from "../model/user.model";


//define structure of our state
export interface AuthState {
  user: User;
}

//initial constant we need something
export const initialAuthState: AuthState={
  user: undefined //set initial value of auth in state
}

//createReducer is reducer creator function ..it creates function
export const authReducer= createReducer(
  initialAuthState,
  on(AuthActions.login,(state,action)=>{
    return{
      user:action.user
    }
  })
)

// export const reducers: ActionReducerMap<AuthState> = {


// };

