import React, {FC} from "react";
import {NavigationContainer} from "@react-navigation/native";
import SecondScreen from "../../screens/SecondScreen/SecondScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from "../../screens/HomeScreen/HomeScreen";
import {IconButton} from "react-native-paper";


type MainNavigatorParamsList = {
    Home: undefined;
    FavoritesCities: undefined;
};

const {Navigator, Screen} = createBottomTabNavigator<MainNavigatorParamsList>();

const MainNavigator: FC = () => {
    return (
        <NavigationContainer>
            <Navigator initialRouteName="Home">
                <Screen name="Home" component={HomeScreen} options={{
                    tabBarIcon: () => (<IconButton icon="home" hasTVPreferredFocus={false}
                                                   tvParallaxProperties={false}/>)
                }}/>
                <Screen name="FavoritesCities" component={SecondScreen}  options={{
                    tabBarIcon: () => (<IconButton icon="star" hasTVPreferredFocus={false}
                                                   tvParallaxProperties={false}/>)
                }}/>
            </Navigator>
        </NavigationContainer>
    )
}

export default MainNavigator;
