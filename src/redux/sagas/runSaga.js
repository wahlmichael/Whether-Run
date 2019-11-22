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

function* fetchSpecificRun(action) {
    try {
        const response = yield axios({
            method: 'POST',
            url: '/api/runs/specific',
            data: {
                day: action.payload.day,
                month: action.payload.month,
                year: action.payload.year,
            }
        })
        yield put({ type: 'SET_SPECIFIC_RUN', payload: response.data});
    } catch (error) {
        console.log('Specifc run get failed', error);
    }
}

function* addRun(action) {
    try {
        yield axios.post('/api/runs', action.payload);
    } catch (error) {
        console.log('Run POST failed', error);
    }
}

function* runSaga() {
    yield takeLatest('FETCH_RUNS_FOR_CALENDAR', fetchRunsForCalendar);
    yield takeLatest('ADD_RUN_SAGA', addRun);
    yield takeLatest('FETCH_SPECIFIC_RUN', fetchSpecificRun)
}

export default runSaga;