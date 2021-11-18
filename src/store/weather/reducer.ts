import {GET_WEATHER_FAILURE, GET_WEATHER_REQUEST, GET_WEATHER_SUCCESS, WeatherActionTypes, WeatherState} from "./types";

const initialState: WeatherState = {
    cityWeather: null,
    errorMsg: null,
    isFetching: false,
};

const WeatherReducer = (state = initialState, action: WeatherActionTypes): WeatherState => {
    switch (action.type) {
        case GET_WEATHER_REQUEST:
            return {
                ...state,
                isFetching: true,
                cityWeather: null,
                errorMsg:null
            };
        case GET_WEATHER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                cityWeather: action.payload.cityWeather
            };
        case GET_WEATHER_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMsg: action.payload.errorMsg
            };
        default:
            return state;
    }
}

export default WeatherReducer;