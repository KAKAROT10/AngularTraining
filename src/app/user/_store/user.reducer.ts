import { createReducer, on,Action } from '@ngrx/store';
import { UserActions } from './user.actions';

// objects are mutable
const initialState = { user: null, error: null };

const _userReducer = createReducer(
  initialState,
  on(UserActions.signInError, (state, { error }) => ({ user: null, error })),
  on(UserActions.signInSuccess, (state, { user }) => ({ user, error:null })),
  on(UserActions.signOut, (state) => initialState)
);

export const userReducer=(state:any,action:Action)=>{
  return _userReducer(state,action);
}