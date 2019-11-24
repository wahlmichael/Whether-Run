import axios from 'axios';
import {
    put,
    takeLatest
} from 'redux-saga/effects';

function* fetchWeather() {
    try {
        const response = yield axios({
            method: 'GET',
            url: '/api/weather',
        })
        yield put({
            type: 'SET_WEATHER',
            payload: response.data
        });
    } catch (error) {
        console.log('Weather get failed', error);
    }
}

function* weatherSaga() {
    yield takeLatest('FETCH_WEATHER', fetchWeather);
}

export default weatherSaga;