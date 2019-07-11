import { all, takeLatest, call, put, select } from 'redux-saga/effects'
import {startRoutine, finishRoutine} from './actions'
import { start, finish } from '../api/timeService'
import {getStudentId} from "../rootSelectors";

export default  function* buttonPanelSaga() {
    yield all([
        takeLatest(finishRoutine.TRIGGER, finishSaga),
        takeLatest(startRoutine.TRIGGER, startSaga)
    ])
}

function* finishSaga() {
    try {
        const _id = yield select(getStudentId);

        yield put(finishRoutine.request());
        yield call(finish, _id);
        yield put(finishRoutine.success());
    }
    catch (error) {
        console.error(error);
        yield put(finishRoutine.failure());
    }
}

function* startSaga() {
    try {
        const _id = yield select(getStudentId);

        yield put(startRoutine.request());
        yield call(start, _id);
        yield put(startRoutine.success());
    }
    catch (error) {
        console.error(error);
        yield put(startRoutine.failure());
    }
}