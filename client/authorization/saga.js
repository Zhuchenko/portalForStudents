import { all, takeLatest, call, put } from 'redux-saga/effects'
import * as actions from './actions'
import { signin, signup, signout } from '../api/authorizationService'

export default  function* authorizationSaga() {
    yield all([
        watchSignin(),
        watchSignup(),
        watchSignout()
    ])
}

function* watchSignin() {
    yield takeLatest(actions.signin, signinSaga)
}

function* watchSignup() {
    yield takeLatest(actions.signup, signupSaga)
}

function* watchSignout() {
    yield takeLatest(actions.signout, signoutSaga)
}

function* signinSaga(action) {
    try {
        const { email, password } = action.payload;
        const username = yield call(signin, email, password);
        yield put(actions.signinSuccess({ username }));
    }
    catch (error) {
        yield put(actions.signinFailure({error}))
    }
}

function* signupSaga(action) {
    try {
        const { email, password, username } = action.payload;
        yield call(signup, email, password, username);
        yield put(actions.signupSuccess());
    }
    catch (error) {
        yield put(actions.signinFailure({error}))
    }
}

function* signoutSaga() {
    try {
        yield call(signout);
        yield put(actions.signoutSuccess())
    }
    catch (error) {
        yield put(actions.signoutFailure({error}))
    }
}