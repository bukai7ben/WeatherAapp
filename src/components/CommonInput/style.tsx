import {StyleSheet} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from "../../utils/consts/Consts";

export const styles = StyleSheet.create({
    input: {
        margin:3,
        height: SCREEN_HEIGHT * 0.045,
        width: SCREEN_WIDTH * 0.6,
        backgroundColor:'white',
        overflow: 'hidden',
    },
});
