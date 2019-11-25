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
        yield put({
            type: 'SET_RUNS_FOR_CALENDAR',
            payload: response.data
        });
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
        if(response.data[0]){
            yield put({
                type: 'SET_SINGLE_RUN',
                payload: response.data[0],
            });
        }
        else{
            yield put({
                type: 'SET_SINGLE_RUN',
                payload: {},
            });
        }
        
    } catch (error) {
        console.log('Specific run get failed', error);
    }
}

function* completeRun(action) {
    try {
        yield axios({
            method: 'PUT',
            url: '/api/runs',
            data: {
                run_id: action.payload,
            }
        })
        yield put ({type: "FETCH_RUNS_FOR_CALENDAR"})
    } catch (error) {
        console.log('Run PUT failed', error);
    }
}

function* deleteRun(action) {
    try {
        yield axios({
            method: 'DELETE',
            url: '/api/runs',
            data: {
                run_id: action.payload,
            }
        })
        yield put ({type: "FETCH_RUNS_FOR_CALENDAR"})
    } catch (error) {
        console.log('Run DELETE failed', error);
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
    yield takeLatest('FETCH_SPECIFIC_RUN', fetchSpecificRun);
    yield takeLatest('DELETE_RUN', deleteRun);
    yield takeLatest('COMPLETE_RUN', completeRun)
}

export default runSaga;