import {CityWeather} from "../../models/CityWeather";

export const ADD_CITY = "add_city"
export const REMOVE_CITY = "remove_city"
export const GET_WEATHER_FOR_FAV_CITIES_REQUEST = "get_weather_for_fav_Cities_request"
export const GET_WEATHER_FOR_FAV_CITIES_SUCCESS = "get_weather_for_fav_Cities_success"
export const GET_WEATHER_FOR_FAV_CITIES_FAILURE = "get_weather_for_fav_Cities_failure"

export interface AddCityAction {
    type: typeof ADD_CITY;
    payload: string;
}

export interface RemoveCityAction {
    type: typeof REMOVE_CITY;
    payload: string;
}

export interface GetWeatherForFavCitiesRequestAction {
    type: typeof GET_WEATHER_FOR_FAV_CITIES_REQUEST;
    payload: { citiesName: string[] };
}

export interface GetWeatherForFavCitiesSuccessAction {
    type: typeof GET_WEATHER_FOR_FAV_CITIES_SUCCESS;
    payload: { cityWeather: CityWeather[] };
}

export interface GetWeatherForFavCitiesFailureAction {
    type: typeof GET_WEATHER_FOR_FAV_CITIES_FAILURE;
    payload: { errorMsg: string[] };
}

export interface FavoritesCitiesState {
    favoritesCities: string[] ;
    cityWeather: CityWeather[] ;
    errorMsg: string[] | null;
    isFetching: boolean;
}

export type FavoritesCitiesActionTypes = AddCityAction | RemoveCityAction | GetWeatherForFavCitiesRequestAction | GetWeatherForFavCitiesSuccessAction | GetWeatherForFavCitiesFailureAction
