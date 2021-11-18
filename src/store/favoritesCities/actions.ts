import {
    ADD_CITY,
    REMOVE_CITY,
    FavoritesCitiesActionTypes, GET_WEATHER_FOR_FAV_CITIES_FAILURE,
    GET_WEATHER_FOR_FAV_CITIES_REQUEST,
    GET_WEATHER_FOR_FAV_CITIES_SUCCESS
} from "./types";
import {CityWeather} from "../../models/CityWeather";

export const addCity = (city: string): FavoritesCitiesActionTypes => ({type: ADD_CITY, payload: city});

export const removeCity = (city: string): FavoritesCitiesActionTypes => ({type: REMOVE_CITY, payload: city});

export const getWeatherForFavCitiesRequest = (citiesName: string[]): FavoritesCitiesActionTypes => {
    return (
        {
            type: GET_WEATHER_FOR_FAV_CITIES_REQUEST,
            payload: {citiesName: citiesName}
        })
}

export const getWeatherForFavCitiesSuccess = (cityWeather: CityWeather[]): FavoritesCitiesActionTypes => ({
    type: GET_WEATHER_FOR_FAV_CITIES_SUCCESS,
    payload: {cityWeather: cityWeather}
})

export const getWeatherForFavCitiesFailure = (errorMsg: string[]): FavoritesCitiesActionTypes => ({
    type: GET_WEATHER_FOR_FAV_CITIES_FAILURE,
    payload: {errorMsg: errorMsg}
})
