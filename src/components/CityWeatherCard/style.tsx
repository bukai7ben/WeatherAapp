import {StyleSheet} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from "../../utils/consts/Consts";

export const styles = StyleSheet.create({
    card: {
        display: 'flex',
        width: SCREEN_WIDTH * 0.8,
        height: SCREEN_HEIGHT * 0.6,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f6fa',
        marginVertical: 3
    },
    title: {
        width: SCREEN_WIDTH * 0.8,
        paddingTop: 25,
        textAlign: "center",
        fontSize: 35,
        color: 'black'
    },
    subTitle: {
        width: SCREEN_WIDTH * 0.8,
        textAlign: "center",
        fontSize: 25,
        color: 'black'
    },
    smallCard: {
        display: 'flex',
        width: SCREEN_WIDTH * 0.9,
        height: SCREEN_HEIGHT * 0.13,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f6fa',
        marginVertical: 3
    },
    smallTitle: {
        width: SCREEN_WIDTH * 0.9,
        paddingTop: 5,
        textAlign: "center",
        fontSize: 29,
        color: 'black'
    },
    smallSubTitle: {
        width: SCREEN_WIDTH * 0.9,
        textAlign: "center",
        fontSize: 23,
        color: 'black'
    },
});
