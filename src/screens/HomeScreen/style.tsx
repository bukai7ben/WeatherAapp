import {StyleSheet} from "react-native";
import {SCREEN_HEIGHT, SCREEN_WIDTH, BLUE_BACKGROUND} from "../../utils/consts/Consts";

export const styles = StyleSheet.create({
    container: {
        height: SCREEN_HEIGHT,
        width: SCREEN_WIDTH,
        paddingVertical:100,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: BLUE_BACKGROUND,
    },
    btn:{
        backgroundColor:"white",
        borderWidth:0,
        shadowColor:'white',
        borderRadius:100,
        width:SCREEN_WIDTH*0.1,
        height: SCREEN_HEIGHT * 0.06
    },
    searchView:{
        marginTop:15,
        position: 'absolute',
        backgroundColor:"white",
        borderRadius:8,
        display:"flex",
        flexDirection:"row"
    },



});
