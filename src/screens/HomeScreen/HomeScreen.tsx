import * as React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {Button} from 'react-native-paper';
import CommonInput from "../../components/CommonInput/CommonInput";
import {useForm} from "react-hook-form";
import {FC} from "react";
import {Dispatch} from "redux"
import {connect} from "react-redux";
import {StoreState} from "../../store/store";
import {getWeatherRequest} from "../../store/weather/actions";
import {WeatherState} from "../../store/weather/types";
import CityWeatherCard from "../../components/CityWeatherCard/CityWeatherCard";
import {styles} from "./style";

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        getWeather: (cityName: string) => {
            dispatch(getWeatherRequest(cityName))
        }
    }
}

const mapStateToProps = (state: StoreState) => ({
    weatherState: state.WeatherReducer
})

interface Props {
    getWeather: (cityName: string) => void;
    weatherState: WeatherState;
}

export type HomeScreenFormType = {
    cityName: string
}

const HomeScreen: FC<Props> = ({getWeather, weatherState: {cityWeather, isFetching, errorMsg}}) => {

    const {control, handleSubmit, formState: {errors}} = useForm<HomeScreenFormType>();

    const onSubmit = ({cityName}: HomeScreenFormType) => getWeather(cityName)

    return (
        <View style={styles.container}>
            <View style={styles.searchView}>
                <CommonInput placeHolder="Temperature in ..." control={control} errors={errors}/>
                <Button style={styles.btn} color="white" mode="contained" icon="magnify" labelStyle={{fontSize: 25}}
                        onPress={handleSubmit(onSubmit)}>{}</Button>
            </View>
            {cityWeather && (<CityWeatherCard {...cityWeather} />)}
            {errorMsg && <Text> Not found</Text>}
            {isFetching && <ActivityIndicator size="small" color="#0000ff"/>}
        </View>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
