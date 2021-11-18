import {all, call, fork, put, takeEvery} from "redux-saga/effects";
import {GET_WEATHER_REQUEST, GetWeatherRequestAction} from "./types";
import axios from "axios";
import {getWeatherFailure, getWeatherSuccess} from "./actions";

import {CityWeather} from "../../models/CityWeather";
import {isWeatherType, WeatherType} from "../../models/WeatherType";
import {API_KEY} from "../../utils/consts/Consts";

const API_URL = `http://api.openweathermap.org/data/2.5/weather`

function* weatherRequestHandler(action: GetWeatherRequestAction) {
    const {cityName} = action.payload
    try {
        const {data} = yield call(
            axios.get,
            API_URL,
            {
                params: {
                    q: cityName,
                    appid: API_KEY
                }
            }
        )
        const temp: number = convertToCelsius(data.main.temp)
        console.log("icon = "+JSON.stringify(data.weather[0].icon))
        console.log(isWeatherType(data.weather[0].icon))
        const weatherType: WeatherType = isWeatherType(data.weather[0].icon) ? data.weather[0].icon : undefined

        const cityWeather: CityWeather = {
            cityName,
            temp,
            weatherType
        }


        yield put(getWeatherSuccess(cityWeather));
    } catch (err) {
        yield put(getWeatherFailure(err.message))
    }
}

const convertToCelsius = (temp: number) => Math.round(Number(temp) - 273.15)

function* watchRequests() {
    yield takeEvery(GET_WEATHER_REQUEST, weatherRequestHandler);
}

function* weatherSagas() {
    yield all([fork(watchRequests)]);
}

export default weatherSagas;
