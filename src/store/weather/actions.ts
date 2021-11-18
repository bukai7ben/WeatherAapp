import {GET_WEATHER_FAILURE, GET_WEATHER_REQUEST, GET_WEATHER_SUCCESS, WeatherActionTypes} from "./types";
import {CityWeather} from "../../models/CityWeather";


export const getWeatherRequest = (cityName: string): WeatherActionTypes => ({
    type: GET_WEATHER_REQUEST,
    payload: {cityName: cityName}
})
export const getWeatherSuccess = (cityWeather: CityWeather): WeatherActionTypes => ({
    type: GET_WEATHER_SUCCESS,
    payload: {cityWeather: cityWeather}
})
export const getWeatherFailure = (errorMsg: string): WeatherActionTypes => ({
    type: GET_WEATHER_FAILURE,
    payload: {errorMsg: errorMsg}
})

