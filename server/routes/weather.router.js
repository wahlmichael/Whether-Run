const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios')
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

/**
 * GETs weather data
 */
router.get('/', rejectUnauthenticated, (req, res) => {
    axios({
        method: 'GET',
        params: {
            key: process.env.WEATHERBIT_API_KEY,
            city: 'Minneapolis, MN',
            units: 'I',
        },
        url: 'http://api.weatherbit.io/v2.0/forecast/daily',
    }).then(response => {
        res.send(handleWeatherData(response.data.data))
    }).catch(error => {
        console.log('Error making weather request', error);
    })
})

const handleWeatherData = (weatherData) => {
    const formattedData = []
    weatherData.forEach(day => {
        const dayOfWeather = {
            date: day.datetime,
            high: day.high_temp,
            low: day.low_temp,
            avg: day.temp,
            precipChance: day.pop,
            image: day.weather.icon,
        }
        formattedData.push(dayOfWeather)
    })
    return formattedData;
}



module.exports = router;