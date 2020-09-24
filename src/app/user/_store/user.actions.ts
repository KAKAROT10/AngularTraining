import { createAction, props } from '@ngrx/store';

enum ActionTypes {
  LOGIN_SUCCESS = '[User] Login success',
  LOGIN_ERROR = '[User] Login error',
  LOGOUT = '[User] Logout',
}

const signInSuccess = createAction(
  ActionTypes.LOGIN_SUCCESS,
  props<{ user: any }>()
);

const signInError = createAction(
  ActionTypes.LOGIN_ERROR,
  props<{ error: string }>()
);

const signOut = createAction(ActionTypes.LOGOUT);

export const UserActions = { ActionTypes, signInError, signInSuccess, signOut };
