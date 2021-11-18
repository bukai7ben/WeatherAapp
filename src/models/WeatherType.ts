export enum WeatherType {
    SUNNY_DAY = '01d',
    CLEAR_NIGHT = '01n',
    FEW_CLOUDS_DAY = '02d',
    FEW_CLOUDS_NIGHT = '02d',
    CLOUDY_DAY = '03d',
    CLOUDY_NIGHT = '03n',
    BROKEN_CLOUDS_DAY = '04d',
    BROKEN_CLOUDS_NIGHT = '04n',
    SHOWER_RAIN_DAY = '09d',
    SHOWER_RAIN_NIGHT = '09n',
    RAINY_DAY = '10d',
    RAINY_NIGHT = '10n',
    STORM_DAY = '11d',
    STORM_NIGHT = '11n',
    SNOW_DAY = '13d',
    SNOW_NIGHT = '13d',
}

const WeatherTypeOptions = [WeatherType.SUNNY_DAY, WeatherType.CLOUDY_DAY, WeatherType.RAINY_DAY, WeatherType.CLEAR_NIGHT,
    WeatherType.CLOUDY_NIGHT, WeatherType.RAINY_NIGHT, WeatherType.FEW_CLOUDS_DAY, WeatherType.FEW_CLOUDS_NIGHT,
    WeatherType.BROKEN_CLOUDS_DAY, WeatherType.BROKEN_CLOUDS_NIGHT, WeatherType.SHOWER_RAIN_DAY, WeatherType.SHOWER_RAIN_NIGHT,
    WeatherType.STORM_DAY, WeatherType.STORM_NIGHT,WeatherType.SNOW_DAY, WeatherType.SNOW_NIGHT
]

export const isWeatherType = (weatherType: string): weatherType is WeatherType => WeatherTypeOptions.some(option => {
    return weatherType?.includes(option)
})
