import React, {FC} from "react";
import {Card} from "react-native-paper";
import {WeatherType} from "../../models/WeatherType";
import WeatherAnimation from "../WeatherAnimation/WeatherAnimation";
import {styles} from "./style";
import StarButton from "../StarButton/StarButton";
import {Text} from "react-native";


type Props = {
    cityName: string,
    temp: number,
    weatherType?: WeatherType,
    secondScreen?: boolean
}

const CityWeatherCard: FC<Props> = ({cityName, temp, weatherType, secondScreen}) => {

    return (
        <Card style={secondScreen?styles.smallCard:styles.card}>
            <Text style={secondScreen?styles.smallTitle:styles.title}>{cityName}</Text>
            <Text style={secondScreen?styles.smallSubTitle:styles.subTitle}>{temp + 'C'}</Text>
            {!secondScreen && <WeatherAnimation weatherType={weatherType}/>}
            {!secondScreen &&<StarButton cityName={cityName}/>}
        </Card>
    )

};

export default CityWeatherCard
