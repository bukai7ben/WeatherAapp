import React, {FC, useEffect, useRef} from "react";
import {View} from "react-native";
import Animation, {AnimationObject} from 'lottie-react-native';
import sunnyAnimation from '../../assets/animation/64906-sunny.json'
import rainyAnimation from '../../assets/animation/64960-rainy-icon.json'
import moonAnimation from '../../assets/animation/moon.json'
import stormAnimation from '../../assets/animation/storm.json'
import snowAnimation from '../../assets/animation/snow.json'
import cloudyAnimation from '../../assets/animation/cloudy.json'
import {WeatherType} from "../../models/WeatherType";
import {styles} from "./style";

type Props = {
    weatherType?: WeatherType
}

const WeatherAnimation: FC<Props> = ({weatherType}) => {

    const animationRef = useRef<Animation>();

    const onRef = (animation: Animation) => {
        if (animationRef) {
            animationRef.current = animation
        }
    }

    useEffect(() => {
        if (animationRef) {
            animationRef.current?.play()
        }
    }, [animationRef])

    const getAnimationType = (): AnimationObject => {
        switch (weatherType) {
            case WeatherType.SUNNY_DAY :
                return sunnyAnimation

            case WeatherType.CLOUDY_DAY :case WeatherType.CLOUDY_NIGHT :case WeatherType.FEW_CLOUDS_NIGHT :case WeatherType.FEW_CLOUDS_DAY :case WeatherType.BROKEN_CLOUDS_DAY :case WeatherType.BROKEN_CLOUDS_NIGHT :
                // @ts-ignore
                return cloudyAnimation

            case WeatherType.CLEAR_NIGHT :
                return moonAnimation

            case WeatherType.RAINY_DAY :case WeatherType.RAINY_NIGHT :case WeatherType.SHOWER_RAIN_DAY :case WeatherType.SHOWER_RAIN_NIGHT:
                return rainyAnimation

            case WeatherType.STORM_DAY :case WeatherType.STORM_NIGHT:
                return stormAnimation

            case WeatherType.SNOW_DAY :case WeatherType.SNOW_NIGHT:
                return snowAnimation

            default:
                return sunnyAnimation

        }
    }

    return (
        <View >
            <Animation
                ref={onRef}
                style={styles.animation}
                loop={true}
                source={getAnimationType()}
            />
        </View>
    )

}

export default WeatherAnimation
