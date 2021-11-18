import {
    ADD_CITY,
    FavoritesCitiesActionTypes,
    FavoritesCitiesState,
    GET_WEATHER_FOR_FAV_CITIES_FAILURE,
    GET_WEATHER_FOR_FAV_CITIES_REQUEST,
    GET_WEATHER_FOR_FAV_CITIES_SUCCESS,
    REMOVE_CITY
} from "./types";

const initialState: FavoritesCitiesState = {
    favoritesCities: [],
    cityWeather: [],
    errorMsg: null,
    isFetching: false,
};

const FavoritesCitiesReducer = (state = initialState, action: FavoritesCitiesActionTypes): FavoritesCitiesState => {
    switch (action.type) {
        case ADD_CITY:
            const isExist = state.favoritesCities.includes(action.payload)
            return isExist ? state
                : {
                    ...state,
                    favoritesCities: state.favoritesCities.concat(action.payload)
                };
        case REMOVE_CITY:
            return {
                ...state,
                favoritesCities: state.favoritesCities.filter(city => city !== action.payload)
            };
        case GET_WEATHER_FOR_FAV_CITIES_REQUEST:
            return {
                ...state,
                isFetching: true,
                errorMsg: null,
            };
        case  GET_WEATHER_FOR_FAV_CITIES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                cityWeather: action.payload.cityWeather
            };
        case GET_WEATHER_FOR_FAV_CITIES_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMsg: action.payload.errorMsg
            };
        default:
            return state;
    }
}

export default FavoritesCitiesReducer;
