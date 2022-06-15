import { userActionsTypes } from './types';
import store from '../store';

//dispatchers

export function signinUserAction(user) {
  return store.dispatch({
    type: userActionsTypes.SIGNIN_ACTION,
    loading: true,
    payload: user,
  });
}

export function signinUserOkAction() {
  return store.dispatch({
    type: userActionsTypes.SIGNIN_ACTION_OK,
    loading: false,
  });
}

export function signinUserErrorAction(data) {
  return store.dispatch({
    type: userActionsTypes.SIGNIN_ACTION_ERROR,
    loading: false,
    payload: data,
  });
}
