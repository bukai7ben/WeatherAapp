import {StyleSheet} from "react-native";
import {SCREEN_HEIGHT, SCREEN_WIDTH} from "../../utils/consts/Consts";


export const styles = StyleSheet.create({
    container: {
        height:SCREEN_HEIGHT*0.85,
        backgroundColor: "#7CB0F3",
        display:"flex",
        alignItems:"center",

    },
    scrollView: {
        marginVertical: 20,
    },
});
