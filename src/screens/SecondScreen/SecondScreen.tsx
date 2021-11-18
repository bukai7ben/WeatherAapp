import {View, ScrollView} from "react-native";
import React, {FC, useEffect} from "react";
import {StoreState} from "../../store/store";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import CityWeatherCard from "../../components/CityWeatherCard/CityWeatherCard";
import {getWeatherForFavCitiesRequest} from "../../store/favoritesCities/actions";
import {FavoritesCitiesState} from "../../store/favoritesCities/types";
import {styles} from "./style";
import {useIsFocused} from '@react-navigation/native';

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        getWeatherForFavCities: (citiesName: string[]) => {
            console.log("dispatch getWeatherForFavCities()")
            dispatch(getWeatherForFavCitiesRequest(citiesName))

        }
    }
}

const mapStateToProps = (state: StoreState) => ({
    favoritesCitiesState: state.FavoritesCitiesReducer

})

interface Props {
    getWeatherForFavCities: (citiesName: string[]) => void;
    favoritesCitiesState: FavoritesCitiesState;
}

const SecondScreen: FC<Props> = ({
                                     getWeatherForFavCities,
                                     favoritesCitiesState: {favoritesCities, cityWeather, errorMsg, isFetching}
                                 }) => {

    const isFocused = useIsFocused();

    useEffect(() => {
        isFocused && getWeatherForFavCities(favoritesCities)
    }, [favoritesCities, isFocused])

    const favCitiesList = cityWeather.map((cityWeather, index) => (
            <CityWeatherCard secondScreen={true} key={cityWeather.cityName}  {...cityWeather} />
        )
    );

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                {favCitiesList}
            </ScrollView>
        </View>
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(SecondScreen)
