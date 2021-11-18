import {createStore, combineReducers, applyMiddleware} from "redux";
import FavoritesCitiesReducer from "./favoritesCities/reducer";
import {FavoritesCitiesState} from "./favoritesCities/types";
import {WeatherState} from "./weather/types";
import WeatherReducer from "./weather/reducer";
import createSagaMiddleware from 'redux-saga'
import weatherSagas from "./weather/sagas";
import favoritesCitiesSagas from "./favoritesCities/sagas";
import {all, fork} from "redux-saga/effects";


export type StoreState = {
    FavoritesCitiesReducer: FavoritesCitiesState,
    WeatherReducer: WeatherState
};

const appReducer = combineReducers<StoreState>({
    FavoritesCitiesReducer, WeatherReducer
});

const sagaMiddleware = createSagaMiddleware()

const store = createStore(appReducer, applyMiddleware(sagaMiddleware)
);

function* rootSaga() {
    yield all([
        fork(weatherSagas),
        fork(favoritesCitiesSagas)
    ])
}

sagaMiddleware.run(rootSaga)

export default store;
