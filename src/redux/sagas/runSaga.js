import axios from 'axios';
import {
    put,
    takeLatest,
    actionChannel
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

function* addRun(action) {
    try {
        const response = yield axios({
            method: 'POST',
            url: '/api/runs',
            body: action.payload
        })
        yield put({ type: 'SET_RUNS_FOR_CALENDAR', payload: response.data});
    } catch (error) {
        console.log('Run get failed', error);
    }
}

function* runSaga() {
    yield takeLatest('FETCH_RUNS_FOR_CALENDAR', fetchRunsForCalendar);
    yield takeLatest('ADD_RUN', addRun);
}

export default runSaga;