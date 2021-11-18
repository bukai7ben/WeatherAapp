import {CityWeather} from "../../models/CityWeather";

export const GET_WEATHER_REQUEST = "get_weather_request"
export const GET_WEATHER_SUCCESS = "get_weather_success"
export const GET_WEATHER_FAILURE = "get_weather_failure"


export interface GetWeatherRequestAction {
    type: typeof GET_WEATHER_REQUEST;
    payload: { cityName: string };
}

export interface GetWeatherSuccessAction {
    type: typeof GET_WEATHER_SUCCESS;
    payload: { cityWeather: CityWeather };
}

export interface GetWeatherFailureAction {
    type: typeof GET_WEATHER_FAILURE;
    payload: { errorMsg: string };
}

export interface WeatherState {
    cityWeather: CityWeather | null;
    errorMsg: string | null;
    isFetching: boolean;
}

export type WeatherActionTypes = GetWeatherRequestAction | GetWeatherSuccessAction | GetWeatherFailureAction