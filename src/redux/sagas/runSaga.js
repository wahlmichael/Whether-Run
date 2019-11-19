import axios from 'axios';
import {
    put,
    takeLatest
} from 'redux-saga/effects';

function* fetchRunsForCalendar() {
    try {
        const response = yield axios({
            method: 'GET',
            url: '/api/runs',
        })
        yield put({ type: 'SET_RUNS_FOR_CALENDAR', payload: response.data});
    } catch (error) {
        console.log('Run get failed', error);
    }
}

function* runSaga() {
    yield takeLatest('FETCH_RUNS_FOR_CALENDAR', fetchRunsForCalendar);
}

export default runSaga;