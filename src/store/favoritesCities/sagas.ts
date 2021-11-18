import {all, call, fork, put, takeEvery} from "redux-saga/effects";
import {GET_WEATHER_FOR_FAV_CITIES_REQUEST, GetWeatherForFavCitiesRequestAction} from "./types";
import axios from "axios";
import {getWeatherForFavCitiesFailure, getWeatherForFavCitiesSuccess} from "./actions";
import {CityWeather} from "../../models/CityWeather";
import {isWeatherType, WeatherType} from "../../models/WeatherType";
import {API_KEY} from "../../utils/consts/Consts";

const API_URL = `http://api.openweathermap.org/data/2.5/weather`

const ascRequest = async (cityName: string): Promise<CityWeather> => {
    const {data} = await
        axios.get(
            API_URL,
            {
                params: {
                    q: cityName,
                    appid: API_KEY
                }
            }
        )
    const temp: number = convertToCelsius(data.main.temp)

    const weatherType: WeatherType = isWeatherType(data.weather[0].icon) ? data.weather[0].icon : undefined

    const cityWeather: CityWeather = {
        cityName,
        temp,
        weatherType
    }

    return cityWeather
}

function* weatherForFavCitiesRequestHandler(action: GetWeatherForFavCitiesRequestAction) {
    const {citiesName} = action.payload
    try {
        const CitiesWeather: CityWeather[] = yield all(
            citiesName.map((cityName: string) => ascRequest(cityName)
            )
        )
        yield put(getWeatherForFavCitiesSuccess(CitiesWeather));
    } catch (err) {
        yield put(getWeatherForFavCitiesFailure(err.message))
    }
}


const convertToCelsius = (temp: number) => Math.round(Number(temp) - 273.15)

function* watchRequests() {
    yield takeEvery(GET_WEATHER_FOR_FAV_CITIES_REQUEST, weatherForFavCitiesRequestHandler);
}

function* favoritesCitiesSagas() {
    yield all([fork(watchRequests)]);
}

export default favoritesCitiesSagas;
