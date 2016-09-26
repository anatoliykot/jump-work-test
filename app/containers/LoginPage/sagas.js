import { take, call, put, select, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE, push } from 'react-router-redux';
import { LOAD_USER } from 'containers/App/constants';
import { userLoaded, userLoadingError } from 'containers/App/actions';

import request from 'utils/request';

import {
  selectUsername,
  selectUserpassword
} from 'containers/LoginPage/selectors';

export function* getUser() {
  const username = yield select(selectUsername());
  const userpassword = yield select(selectUserpassword());
  
  const requestTokenURL = 'http://jump-api-dev.herokuapp.com/auth/login/';
  const requestUserDataURL = 'http://jump-api-dev.herokuapp.com/auth/user/';
  
  let userToken = yield call(
    request,
    requestTokenURL,
    {
      method: 'POST',
      mode: 'CORS',
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
      },
      body: JSON.stringify({
        "email": username,
        "password": userpassword
      })
    }
  );
  userToken = userToken.data.key;
  
  const userData = yield call(
    request,
    requestUserDataURL,
    {
      method: 'GET',
      mode: 'CORS',
      headers: {
        'Cache-Control': 'no-cache',
        'Authorization': `Token ${userToken}`,
      }
    }
  );
  
  if (!userData.err) {
    yield put(userLoaded(userData.data, userToken));
    yield put(push('/'));
  } else {
    yield put(userLoadingError(userData.err));
  }
}

export function* getUserWatcher() {
  while (yield take(LOAD_USER)) {
    yield call(getUser);
  }
}

export function* userData() {
  const watcher = yield fork(getUserWatcher);
  
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default [
  userData,
];
