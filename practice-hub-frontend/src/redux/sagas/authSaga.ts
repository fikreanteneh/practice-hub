import { call, takeEvery, put, all } from 'redux-saga/effects'
import Actions from '../actions'
import {setAuthLoading, setAuthFailed, setCurrentUser } from '../ducks/authDuck';
import { signUpWithEmail, signinWithEmail, resetPassword, signout } from '../request/authRequests';
import * as T from '../../types';


export function* handleSigninWithEmail(action: { payload: T.SignIn; }) {
    try {
        yield put(setAuthLoading());
        yield call(signinWithEmail, action.payload);
        // const user: UserCredential = yield call(signinWithEmail, action.payload);
        // yield put(setCurrentUser(user));
    } catch (error) {
        yield put(setAuthFailed((error as Error).message));
    }
}
  

export function* handleSignup(action: { payload: T.SignUp; }) {
    try {
        yield put(setAuthLoading());
        yield call(signUpWithEmail, action.payload);
        yield put(setCurrentUser(null));
    } catch (error) {
        yield put(setAuthFailed((error as Error).message));
    }
}

export function* handleSignout() {
  try {
    yield put(setAuthLoading());
    yield call(signout);
  } catch (error) {
    yield put(setAuthFailed((error as Error).message));
  }
}


export function* handleResetPassword(action: { payload: T.ResetPassword; }) {
    try {
        yield call(resetPassword, action.payload);
    } catch (error) {
        yield put(setAuthFailed((error as Error).message));
    }

}


export function* watchSigninWithEmail() {
    yield takeEvery(Actions.SIGNIN, handleSigninWithEmail);
}

export function* watchSignup() {
    yield takeEvery(Actions.SIGNUP, handleSignup);
}


export function* watchSignout() {
  yield takeEvery(Actions.SIGNOUT, handleSignout);
}


export default function* authSaga() {
    yield all([
        watchSigninWithEmail(),
        watchSignup(),
        watchSignout()
    ])

}