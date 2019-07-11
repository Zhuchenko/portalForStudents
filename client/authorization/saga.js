import { all, takeLatest, call, put } from 'redux-saga/effects'
import {loginRoutine, logoutRoutine} from './actions'
import { login, logout } from '../api/authorizationService'

export default  function* authorizationSaga() {
    yield all([
        takeLatest(loginRoutine, loginSaga),
        takeLatest(logoutRoutine, logoutSaga)
    ])
}

function* loginSaga(action) {
    try {
        const { email, password } = action.payload;
        const id = yield call(login, email, password);
        yield put(loginRoutine.success({ name: id }));
    }
    catch (error) {
        yield put(loginRoutine.failure({error}))
    }
}

function* logoutSaga() {
    try {
        yield call(logout);
        yield put(logoutRoutine.success())
    }
    catch (error) {
        yield put(logoutRoutine.failure({error}))
    }
}