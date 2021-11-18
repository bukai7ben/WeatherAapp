import {WeatherType} from "./WeatherType";

export interface CityWeather {
    weatherType?: WeatherType
    cityName: string;
    temp: number;
}