import * as React from 'react';
import {IconButton} from 'react-native-paper';
import {FC, memo, useCallback, useEffect, useMemo, useState} from "react";
import {Dispatch} from "redux";
import {addCity, removeCity} from "../../store/favoritesCities/actions";
import store, {StoreState} from "../../store/store";
import {connect} from "react-redux";
import {styles} from "./style"
import {View} from "react-native";
import {GOLD} from "../../utils/consts/Consts";


const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addCityToFavorites: (cityName: string) => {
            dispatch(addCity(cityName))
        },
        removeCityFromFavorites: (cityName: string) => {
            dispatch(removeCity(cityName))
        },
    }
}

const mapStateToProps = (state: StoreState) => ({
    favoritesCities: state.FavoritesCitiesReducer.favoritesCities
})

interface Props {
    cityName: string,
    addCityToFavorites: (cityName: string) => void,
    removeCityFromFavorites: (cityName: string) => void,
    favoritesCities: string[]
}

const StarButton: FC<Props> = ({cityName, addCityToFavorites, removeCityFromFavorites, favoritesCities}) => {

    useEffect(() => {
        setIsPressed(isInFavorites)
    }, [favoritesCities])

    const isInFavorites = useMemo(() => favoritesCities.includes(cityName), [favoritesCities])

    const [isPressed, setIsPressed] = useState(isInFavorites)

    const onSubmit = useCallback(() => {
        isPressed ? removeCityFromFavorites(cityName) : addCityToFavorites(cityName)
        setIsPressed(!isPressed)
    }, [isPressed])

    const something = () => console.log("i dont need a useCallback");


    return (
        <View style={styles.btn}>
            <IconButton
                icon="star"
                color={isPressed ? GOLD : 'gray'}
                size={50}
                onPress={onSubmit}
                hasTVPreferredFocus={false}
                tvParallaxProperties={false}
            />
        </View>);
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(StarButton))
