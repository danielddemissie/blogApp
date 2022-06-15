import { all, takeEvery, call } from 'redux-saga/effects';
import { signinUserOkAction } from '../actions/actions';
import { signinUserAPI } from '../api';
import { userActionsTypes } from '../actions/types';
//worker

function* signinUserSaga(action) {
  try {
    const user = action.payload;
    yield call(signinUserAPI, user);
    yield signinUserOkAction(user);
  } catch (error) {
    yield console.log(error.message);
  }
}

//watcher

export function* _signinUserSaga() {
  yield takeEvery(userActionsTypes.SIGNIN_ACTION, signinUserSaga);
}

export default function* rootSaga() {
  yield all([_signinUserSaga()]);
}
