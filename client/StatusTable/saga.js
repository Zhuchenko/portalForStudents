import {takeLatest, call, put, select} from 'redux-saga/effects'
import {tableLoad} from './actions'
import {getWorkdaysForMonth, getDetailedWorkdaysForMonth} from '../api/mongoService'
import {getStudentId} from "../rootSelectors";
import React from "react";

export default  function* statusTableSaga() {
    yield takeLatest(tableLoad.TRIGGER, startSaga)
}

function* startSaga() {
    try {
        const _id = yield select(getStudentId);

        yield put(tableLoad.request());

        const rawWorkdays = yield call(getDetailedWorkdaysForMonth, _id);
        // const rawWorkdays = yield call(getWorkdaysForMonth, _id);
        let workweeks = [];
        if (rawWorkdays.length) {
            let currentNumberOfTheWeek = rawWorkdays[0].numberOfTheWeek;

            // weeks before first workweek
            for (let i = 0; i < currentNumberOfTheWeek - 1; i++) {
                workweeks.push({
                    numberOfTheWeek: i + 1,
                    daysOfTheWeek: []
                });
            }

            workweeks = rawWorkdays.reduce((prev, curr) => {
                let workweek = prev.find((workday) => workday.numberOfTheWeek === curr.numberOfTheWeek);
                if (!workweek) {
                    return [...prev, {
                        numberOfTheWeek: curr.numberOfTheWeek,
                        daysOfTheWeek: [curr]
                    }]
                } else {
                    workweek.daysOfTheWeek.push(curr);
                    return [...prev];
                }
            }, workweeks);
        }

        yield put(tableLoad.success(workweeks));
    } catch (error) {
        console.error(error);
        yield put(tableLoad.failure());
    }
}