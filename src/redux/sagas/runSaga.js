import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchRunsForCalendar() {
    try {
            console.log('Hello in fetch runs for calendar')
        // yield put({ type: 'FETCH_ITEMS'});
    } catch (error) {
        console.log('Run get failed', error);
    }
}

function* runSaga() {
  yield takeLatest('FETCH_RUNS_FOR_CALENDAR', fetchRunsForCalendar);
}

export default runSaga;